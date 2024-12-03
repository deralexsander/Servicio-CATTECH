import { Component, OnInit } from '@angular/core';
import { CardService, Card } from '../../card.service'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { VisitasService } from 'src/app/services/visitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cards: Card[] = [];
  visitas: any[] = [];
  contadorMaximo: number = 0;
  maxCards = 4;
  user: any; 
  showMenu = false; // Inicializa en false

  constructor(private cardService: CardService, private afAuth: AngularFireAuth, private router: Router, private visitasService: VisitasService) {}

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
  
    // Cargar las tarjetas iniciales desde el servicio de tarjetas
    this.cards = this.cardService.getCards();
  }
  
  toggleMenu() {
    this.showMenu = !this.showMenu; // Alterna el estado del menú
    console.log('Menú alternado:', this.showMenu); // Verifica si se está llamando
  }
  
  redirectToGoogle() {
    if (this.user && this.user.email) {
      window.open('https://myaccount.google.com', '_blank');
    } else {
      console.log('Usuario no autenticado');
    }
  }
  
  logout() {
    this.afAuth.signOut().then(() => {
      console.log('Usuario desconectado');
      this.router.navigate(['/login']);
    });
  }
}
