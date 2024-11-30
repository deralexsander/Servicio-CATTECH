import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa desde compat
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private hasLoggedOut: boolean = false; // Variable para manejar el estado de logout

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Método para indicar que el usuario ha cerrado sesión
  setLoggedOut(status: boolean) {
    this.hasLoggedOut = status;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState.pipe(
      take(1), // Tomamos el estado de autenticación solo una vez
      map(user => {
        if (user) {
          // Si el usuario está autenticado, pero intenta acceder al login
          if (next.routeConfig?.path === 'login') {
            // Si el usuario ya está autenticado, lo redirigimos al home
            this.router.navigate(['/home']);
            return false; // Impide el acceso al login
          }
          return true; // Si está autenticado, permite el acceso a rutas protegidas
        } else {
          // Si el usuario no está autenticado y está intentando acceder a una ruta protegida
          if (next.routeConfig?.path !== 'login') {
            this.router.navigate(['/login']); // Redirige al login
          }
          return false; // No puede acceder a rutas protegidas si no está autenticado
        }
      })
    );
  }
}
