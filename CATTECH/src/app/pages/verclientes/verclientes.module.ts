import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerclientesPageRoutingModule } from './verclientes-routing.module';

import { VerclientesPage } from './verclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerclientesPageRoutingModule
  ],
  declarations: [VerclientesPage]
})
export class VerclientesPageModule {}
