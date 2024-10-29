import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntosPageRoutingModule } from './puntos-routing.module';

import { PuntosPage } from './puntos.page';

import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntosPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [PuntosPage]
})
export class PuntosPageModule {}
