import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { VisitasService } from 'src/app/services/visitas.service'; // Asegúrate de que el servicio esté bien importado

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  user: any; // Propiedad para almacenar los datos del usuario
  visitas: any[] = []; // Propiedad para almacenar los datos de visitas
  contadorMaximo: number = 0; // Propiedad para almacenar el contador más grande

  constructor(
    private afAuth: AngularFireAuth,
    private visitasService: VisitasService // Inyectar el servicio de visitas
  ) {}

  ngOnInit() {
    // Suscribirse al estado de autenticación del usuario
    this.afAuth.authState.subscribe(user => {
      console.log('Usuario autenticado:', user); // Muestra detalles del usuario
      this.user = user; // Asigna el objeto de usuario
    });

    // Obtener datos de visitas desde Firestore para el usuario autenticado
    this.visitasService.getVisitasPorUsuario().subscribe(
      visitas => {
        console.log('Datos de visitas recibidos:', visitas); // Imprime los datos en la consola
        this.visitas = visitas; // Asigna los datos obtenidos a la propiedad visitas
        
        // Ordenar las visitas por el contador de mayor a menor
        if (this.visitas.length > 0) {
          this.visitas.sort((a, b) => b.contador - a.contador);
          this.contadorMaximo = this.visitas[0].contador;
        }
      },
      error => {
        console.error('Error al obtener visitas:', error); // Manejo de errores
      }
    );
  }
}
