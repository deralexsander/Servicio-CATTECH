import { Component, OnInit } from '@angular/core';
import { CardService, Card } from '../../card.service'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cards: Card[] = [];
  maxCards = 4;
  user: any; 
  showMenu = false; // Inicializa en false

  constructor(private cardService: CardService, private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.cards = this.cardService.getCards();
    this.afAuth.authState.subscribe(user => {
      this.user = user; 
      console.log(this.user);
    });
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
