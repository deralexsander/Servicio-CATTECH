import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'pruenas',
    loadChildren: () => import('./pages/pruenas/pruenas.module').then( m => m.PruenasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'puntos',
    loadChildren: () => import('./pages/puntos/puntos.module').then( m => m.PuntosPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./pages/dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  {
    path: 'visitas',
    loadChildren: () => import('./pages/visitas/visitas.module').then( m => m.VisitasPageModule)
  },
  {
    path: 'cobertura',
    loadChildren: () => import('./pages/cobertura/cobertura.module').then( m => m.CoberturaPageModule)
  },
  {
    path: 'reciclar',
    loadChildren: () => import('./pages/reciclar/reciclar.module').then( m => m.ReciclarPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
