import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first, switchMap } from 'rxjs/operators';

interface Visita {
  contador: number; // Contador para las visitas
  titulo: string;  // Título de la visita
  cliente: string;
  fecha: string;
  correo: string;
  hora: string;
  direccion: string;
  motivo: string;
  imagenes: string[]; // URLs de las imágenes asociadas a la visita
  estado: string; // "en espera" o "listo"
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

  async addVisita(visita: Visita): Promise<void> {
    const user = await this.afAuth.authState.pipe(first()).toPromise();
    if (user && user.email) {
      visita.correo = user.email;

      // Inicializar el estado de la visita como "en espera"
      visita.estado = 'en espera';

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
        let nuevoContador = 1; // Valor por defecto si no hay visitas previas

        if (visitasSnapshot && !visitasSnapshot.empty) {
          // Encuentra el contador máximo y suma 1
          const contadores = visitasSnapshot.docs.map(doc => doc.data().contador);
          nuevoContador = Math.max(...contadores) + 1;
        }

        // Asignar el nuevo contador a la visita
        visita.contador = nuevoContador;

        // Agregar la visita a Firestore
        const docRef = await this.firestore.collection(this.collectionName).add(visita);
        console.log('Documento agregado con ID:', docRef.id);
      } catch (error) {
        console.error('Error al obtener el contador de visitas:', error);
        throw new Error('Error al obtener el contador de visitas');
      }
    } else {
      throw new Error('Usuario no autenticado');
    }
  }

  getVisitas(): Observable<Visita[]> {
    return this.firestore.collection<Visita>(this.collectionName).valueChanges();
  }

  getVisitasPorUsuario(): Observable<Visita[]> {
    return this.afAuth.authState.pipe(
      first(),
      switchMap(user => {
        if (user && user.email) {
          return this.firestore
            .collection<Visita>(this.collectionName, ref =>
              ref.where('correo', '==', user.email) // Filtra las visitas por el correo del usuario
            )
            .valueChanges();
        } else {
          throw new Error('Usuario no autenticado');
        }
      })
    );
  }

  // Método para actualizar el estado de una visita
  async updateEstado(id: string, estado: string): Promise<void> {
    try {
      await this.firestore.collection(this.collectionName).doc(id).update({ estado });
      console.log('Estado de la visita actualizado');
    } catch (error) {
      console.error('Error al actualizar el estado de la visita:', error);
      throw new Error('Error al actualizar el estado de la visita');
    }
  }
}
