import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaadminPage } from './agendaadmin.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaadminPageRoutingModule {}
