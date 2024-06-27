import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CodeUsedGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const codeUsed = !localStorage.getItem('generatedCode'); // El código no debería estar en localStorage si ya fue usado

    if (codeUsed) {
      this.router.navigate(['/home']); // Redirigir al usuario a home si el código ya fue usado
      return false;
    }
    
    return true;
  }
}
