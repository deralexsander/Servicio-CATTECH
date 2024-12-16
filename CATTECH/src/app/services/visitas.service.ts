import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first, switchMap } from 'rxjs/operators';

interface Visita {
  id: string;           // ID único generado por Firestore
  contador: number;     // Contador para las visitas
  titulo: string;       // Título de la visita
  cliente: string;
  fecha: string;
  correo: string;
  hora: string;
  direccion: string;
  motivo: string;
  estado: string;       // "en espera" o "listo"
  tipo_tarjeta: string; // Nuevo campo para identificar el tipo de tarjeta
}

@Injectable({
  providedIn: 'root',
})
export class VisitasService {
  private collectionName = 'visitas';

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth // Servicio de autenticación
  ) {}

  // Método para obtener una visita por ID
  getVisitaPorId(id: string): Observable<Visita | undefined> {
    return this.firestore.collection<Visita>(this.collectionName).doc(id).valueChanges();
  }

  // Método para agregar una nueva visita
  async addVisita(visita: Visita): Promise<void> {
    const user = await this.afAuth.authState.pipe(first()).toPromise();
    if (user && user.email) {
      visita.correo = user.email;

      // Inicializar valores por defecto
      visita.estado = 'En espera';

      // Verificar que el título no esté vacío
      if (!visita.titulo || visita.titulo.trim() === '') {
        throw new Error('El título de la visita no puede estar vacío');
      }

      // Obtener el contador más alto de las visitas existentes del usuario
      const visitasRef = this.firestore.collection<Visita>(this.collectionName, ref =>
        ref.where('correo', '==', user.email)
      );

      try {
        const visitasSnapshot = await visitasRef.get().toPromise();
        let nuevoContador = 1;

        if (visitasSnapshot && !visitasSnapshot.empty) {
          const contadores = visitasSnapshot.docs.map(doc => doc.data().contador);
          nuevoContador = Math.max(...contadores) + 1;
        }

        visita.contador = nuevoContador;

        // Agregar la visita a Firestore
        const docRef = await this.firestore.collection(this.collectionName).add(visita);
        console.log('Documento agregado con ID:', docRef.id);

        // Actualizar el ID del documento
        await docRef.update({ id: docRef.id });
      } catch (error) {
        console.error('Error al agregar la visita:', error);
        throw new Error('Error al agregar la visita');
      }
    } else {
      throw new Error('Usuario no autenticado');
    }
  }

  // Obtener todas las visitas
  getVisitas(): Observable<Visita[]> {
    return this.firestore.collection<Visita>(this.collectionName).valueChanges();
  }

  // Obtener visitas del usuario autenticado
  getVisitasPorUsuario(): Observable<Visita[]> {
    return this.afAuth.authState.pipe(
      first(),
      switchMap(user => {
        if (user && user.email) {
          return this.firestore
            .collection<Visita>(this.collectionName, ref =>
              ref.where('correo', '==', user.email)
            )
            .valueChanges();
        } else {
          throw new Error('Usuario no autenticado');
        }
      })
    );
  }

  // Obtener visitas filtradas por tipo de tarjeta
  getVisitasPorTipo(tipo_tarjeta: string): Observable<Visita[]> {
    return this.afAuth.authState.pipe(
      first(),
      switchMap(user => {
        if (user && user.email) {
          return this.firestore
            .collection<Visita>(this.collectionName, ref =>
              ref.where('correo', '==', user.email)
                 .where('tipo_tarjeta', '==', tipo_tarjeta)
            )
            .valueChanges();
        } else {
          throw new Error('Usuario no autenticado');
        }
      })
    );
  }

  // Actualizar el estado de una visita
  async updateEstado(id: string, estado: string): Promise<void> {
    try {
      await this.firestore.collection(this.collectionName).doc(id).update({ estado });
      console.log('Estado de la visita actualizado');
    } catch (error) {
      console.error('Error al actualizar el estado de la visita:', error);
      throw new Error('Error al actualizar el estado de la visita');
    }
  }

  // Actualizar tipo de tarjeta de una visita
  async updateTipoTarjeta(id: string, tipo_tarjeta: string): Promise<void> {
    try {
      await this.firestore.collection(this.collectionName).doc(id).update({ tipo_tarjeta });
      console.log('Tipo de tarjeta actualizado');
    } catch (error) {
      console.error('Error al actualizar el tipo de tarjeta:', error);
      throw new Error('Error al actualizar el tipo de tarjeta');
    }
  }

  // Actualizar una visita completa
  async updateVisita(id: string, visita: Visita): Promise<void> {
    try {
      await this.firestore.collection(this.collectionName).doc(id).update(visita);
      console.log('Visita actualizada');
    } catch (error) {
      console.error('Error al actualizar la visita:', error);
      throw new Error('Error al actualizar la visita');
    }
  }
}
