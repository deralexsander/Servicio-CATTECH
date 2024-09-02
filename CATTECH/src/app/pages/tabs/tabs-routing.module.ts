import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'puntos',
        loadChildren: () => import('../puntos/puntos.module').then(m => m.PuntosPageModule)
      },
      {
        path: 'historial',
        loadChildren: () => import('../historial/historial.module').then( m => m.HistorialPageModule)
      },
      {
        path: 'dispositivos',
        loadChildren: () => import('../dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
