import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerclientesPage } from './verclientes.page';

const routes: Routes = [
  {
    path: '',
    component: VerclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerclientesPageRoutingModule {}
