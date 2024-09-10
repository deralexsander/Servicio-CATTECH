import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizardisponibilidadPageRoutingModule } from './actualizardisponibilidad-routing.module';

import { ActualizardisponibilidadPage } from './actualizardisponibilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizardisponibilidadPageRoutingModule
  ],
  declarations: [ActualizardisponibilidadPage]
})
export class ActualizardisponibilidadPageModule {}
