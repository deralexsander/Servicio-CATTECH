import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: any; 

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.user = user; // Almacena la información del usuario
    });
  }

  redirectToGoogle() {
    if (this.user && this.user.email) {
      window.open('https://myaccount.google.com', '_blank');
    }
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
