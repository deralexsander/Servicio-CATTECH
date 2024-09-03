import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciclarPage } from './reciclar.page';

const routes: Routes = [
  {
    path: '',
    component: ReciclarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciclarPageRoutingModule {}
