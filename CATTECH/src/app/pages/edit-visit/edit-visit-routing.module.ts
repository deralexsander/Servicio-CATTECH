import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditVisitPage } from './edit-visit.page';

const routes: Routes = [
  {
    path: '',
    component: EditVisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditVisitPageRoutingModule {}
