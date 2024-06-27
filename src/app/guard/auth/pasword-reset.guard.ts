import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const passwordReset = localStorage.getItem('passwordReset');

    if (passwordReset) {
      this.router.navigate(['/login']); // Redirigir al usuario al login si la contraseña ya fue cambiada
      return false;
    }

    return true;
  }
}
