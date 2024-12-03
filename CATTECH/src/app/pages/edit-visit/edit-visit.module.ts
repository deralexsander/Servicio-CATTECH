import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVisitPageRoutingModule } from './edit-visit-routing.module';

import { EditVisitPage } from './edit-visit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditVisitPageRoutingModule
  ],
  declarations: [EditVisitPage]
})
export class EditVisitPageModule {}
