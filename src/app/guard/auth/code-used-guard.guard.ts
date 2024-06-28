import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CodeServiceService } from '../../login/services/code-service.service';

@Injectable({
  providedIn: 'root'
})
export class CodeUsedGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const codeUsed = localStorage.getItem('codeUsed');
    if (codeUsed) {
      // Si el código ya ha sido utilizado, redirige a home
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
