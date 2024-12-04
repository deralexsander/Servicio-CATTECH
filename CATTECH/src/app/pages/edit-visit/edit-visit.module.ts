import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule aquí

import { IonicModule } from '@ionic/angular';

import { EditVisitPageRoutingModule } from './edit-visit-routing.module';

import { EditVisitPage } from './edit-visit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule aquí
    IonicModule,
    EditVisitPageRoutingModule
  ],
  declarations: [EditVisitPage]
})
export class EditVisitPageModule {}
