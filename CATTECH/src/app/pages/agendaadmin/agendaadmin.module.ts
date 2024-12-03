import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaadminPageRoutingModule } from './agendaadmin-routing.module';

import { AgendaadminPage } from './agendaadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaadminPageRoutingModule
  ],
  declarations: [AgendaadminPage]
})
export class AgendaadminPageModule {}
