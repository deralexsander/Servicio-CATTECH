import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard'; // Asegúrate de importar correctamente el guard

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: any;

  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router,
    private authGuard: AuthGuard // Inyectamos el AuthGuard en el constructor
  ) { }

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
      // Marcamos que el usuario ha cerrado sesión
      this.authGuard.setLoggedOut(true); // Usamos el método setLoggedOut del guard
      this.router.navigate(['/login']);
    });
  }
}
