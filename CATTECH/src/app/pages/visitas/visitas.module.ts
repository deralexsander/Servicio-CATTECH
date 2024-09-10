import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitasPageRoutingModule } from './visitas-routing.module';

import { VisitasPage } from './visitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VisitasPageRoutingModule
  ],
  declarations: [VisitasPage]
})
export class VisitasPageModule {}
