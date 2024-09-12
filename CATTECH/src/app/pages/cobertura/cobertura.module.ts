import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CoberturaPageRoutingModule } from './cobertura-routing.module';
import { CoberturaPage } from './cobertura.page';
import { CardService } from '../../card.service';  // Verifica que esté correctamente importado

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoberturaPageRoutingModule
  ],
  declarations: [CoberturaPage],
  providers: [CardService]  // Si es necesario, pero no debería serlo
})
export class CoberturaPageModule {}
