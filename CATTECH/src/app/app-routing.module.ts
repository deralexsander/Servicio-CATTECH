import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then(m => m.HistorialPageModule)
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./pages/dispositivos/dispositivos.module').then(m => m.DispositivosPageModule)
  },
  {
    path: 'visitas',
    loadChildren: () => import('./pages/visitas/visitas.module').then(m => m.VisitasPageModule)
  },
  {
    path: 'cobertura',
    loadChildren: () => import('./pages/cobertura/cobertura.module').then(m => m.CoberturaPageModule)
  },
  {
    path: 'reciclar',
    loadChildren: () => import('./pages/reciclar/reciclar.module').then(m => m.ReciclarPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then(m => m.ContactoPageModule)
  },
  {
    path: 'perfiltrabajador',
    loadChildren: () => import('./pages/perfiltrabajador/perfiltrabajador.module').then(m => m.PerfiltrabajadorPageModule)
  },
  {
    path: 'actualizardisponibilidad',
    loadChildren: () => import('./pages/actualizardisponibilidad/actualizardisponibilidad.module').then(m => m.ActualizardisponibilidadPageModule)
  },
  {
    path: 'verclientes',
    loadChildren: () => import('./pages/verclientes/verclientes.module').then(m => m.VerclientesPageModule)
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./pages/recuperacion/recuperacion.module').then(m => m.RecuperacionPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then(m => m.EditarperfilPageModule)
  },
  {
    path: 'puntos',
    loadChildren: () => import('./pages/puntos/puntos.module').then( m => m.PuntosPageModule)
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./pages/dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  {
    path: 'agendaadmin',
    loadChildren: () => import('./pages/agendaadmin/agendaadmin.module').then( m => m.AgendaadminPageModule)
  },
  {
    path: 'edit-visit/:id',
    loadChildren: () => import('./pages/edit-visit/edit-visit.module').then( m => m.EditVisitPageModule)
  },

  // Ruta para la página 404
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
