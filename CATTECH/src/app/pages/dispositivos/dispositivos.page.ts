import { Component, OnInit } from '@angular/core';
import { CardService, CardWithDevices } from '../../card.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importar AngularFireAuth

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {

  cardsWithDevices: CardWithDevices[] = [];
  user: any;  // Propiedad para almacenar los datos del usuario

  constructor(
    private cardService: CardService, 
    private afAuth: AngularFireAuth  // Inyectar AngularFireAuth para la autenticación
  ) {}

  ngOnInit() {
    // Suscribirse al estado de autenticación del usuario
    this.afAuth.authState.subscribe(user => {
      this.user = user;  // Asigna el objeto de usuario
      console.log(this.user);  // Muestra los detalles del usuario en la consola
    });

    // Obtener las tarjetas con dispositivos
    this.cardsWithDevices = this.cardService.getCardsWithDevices();
  }
}
