import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarperfilmodalComponent } from 'src/app/editarperfilmodal/editarperfilmodal.component'; // Importa el componente modal

import { EditarperfilPage } from './editarperfil.page';
import { EditarperfilPageRoutingModule } from './editarperfil-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarperfilPageRoutingModule
    
  ],
  declarations: [EditarperfilPage, EditarperfilmodalComponent], // Agrega el componente modal a las declaraciones
})
export class EditarperfilPageModule {}
