import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruenasPageRoutingModule } from './pruenas-routing.module';

import { PruenasPage } from './pruenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruenasPageRoutingModule
  ],
  declarations: [PruenasPage]
})
export class PruenasPageModule {}
