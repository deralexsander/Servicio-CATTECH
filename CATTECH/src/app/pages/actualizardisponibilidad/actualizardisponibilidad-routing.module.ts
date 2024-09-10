import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizardisponibilidadPage } from './actualizardisponibilidad.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizardisponibilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizardisponibilidadPageRoutingModule {}
