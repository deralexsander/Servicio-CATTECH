import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciclarPageRoutingModule } from './reciclar-routing.module';

import { ReciclarPage } from './reciclar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReciclarPageRoutingModule
  ],
  declarations: [ReciclarPage]
})
export class ReciclarPageModule {}
