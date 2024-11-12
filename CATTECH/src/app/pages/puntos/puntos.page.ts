import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importar AngularFireAuth

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.page.html',
  styleUrls: ['./puntos.page.scss'],
})
export class PuntosPage implements OnInit {

  user: any;  // Propiedad para almacenar los datos del usuario

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    // Suscribirse al estado de autenticación del usuario
    this.afAuth.authState.subscribe(user => {
      this.user = user;  // Asigna el objeto de usuario
      console.log(this.user);  // Muestra los detalles del usuario en la consola
    });
  }
}
