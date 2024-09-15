import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarperfilmodalComponent } from 'src/app/editarperfilmodal/editarperfilmodal.component'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage {
  isModalOpen = false;

  constructor(private modalController: ModalController) { }

  async openEditModal(field: string) {
    const modal = await this.modalController.create({
      component: EditarperfilmodalComponent,
      componentProps: { field },
    });

    return await modal.present();
  }
  closeEditarPerfilModal() {
    this.isModalOpen = false;
  }
}