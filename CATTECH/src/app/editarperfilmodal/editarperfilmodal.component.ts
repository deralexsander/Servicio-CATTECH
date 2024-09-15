import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfilmodal',
  templateUrl: './editarperfilmodal.component.html',
  styleUrls: ['./editarperfilmodal.component.scss'],
})
export class EditarperfilmodalComponent {
  
  @Input() field: string = ''; // Campo a editar, pasado como propiedad
  newFieldValue: string = '';  // Nuevo valor ingresado por el usuario
  currentPassword: string = ''; // Contraseña actual del usuario

  constructor(private modalController: ModalController) {}

  // Método para guardar los cambios
  saveChanges() {
    if (this.currentPassword) {
      console.log(`Guardando cambios en el campo: ${this.field}`);
      console.log(`Nuevo valor: ${this.newFieldValue}`);

      // Cierra el modal y devuelve el nuevo valor
      this.modalController.dismiss({
        field: this.field,
        newValue: this.newFieldValue,
      });
    } else {
      console.log('Contraseña actual requerida para confirmar cambios.');
    }
  }

  // Método para cerrar el modal sin guardar
  closeModal() {
    this.modalController.dismiss();
  }
}
