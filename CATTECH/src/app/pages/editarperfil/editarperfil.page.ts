import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarperfilmodalComponent } from 'src/app/editarperfilmodal/editarperfilmodal.component'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  user: any; // Propiedad para almacenar la información del usuario

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // Aquí debes obtener la información del usuario, por ejemplo, desde un servicio
    this.user = {
      displayName: 'Nicolas Muñoz',
      username: 'Mr.Nico',
      email: 'MrNico@gmail.com',
      phone: '+56999669966',
      photoURL: 'ruta/a/tu/foto.jpg' // Cambia esto según la lógica de tu aplicación
    };
  }

  async openEditModal(field: string) {
    const modal = await this.modalController.create({
      component: EditarperfilmodalComponent,
      componentProps: { field, value: this.user[field] },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.user[field] = result.data; // Actualiza el valor en el usuario
      }
    });

    return await modal.present();
  }
}
