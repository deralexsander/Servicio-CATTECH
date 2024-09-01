import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruenasPage } from './pruenas.page';

const routes: Routes = [
  {
    path: '',
    component: PruenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruenasPageRoutingModule {}
