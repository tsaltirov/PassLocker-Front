import { Component } from '@angular/core';
import { PasswordCreateService } from './services/password-create.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password-creator',
  templateUrl: './password-creator.component.html',
  styleUrls: ['./password-creator.component.css']
})
export class PasswordCreatorComponent {
  userService: string = '';
  userName: string = '';
  password: string = '';
  length: number = 9 ;

  constructor(private passwordService: PasswordCreateService, private router: Router) { 
    this.generatePassword();
  }

  generatePassword(): void {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    this.password = Array(this.length || 9).fill(chars).map(x => x[Math.floor(Math.random() * x.length)]).join('');
    this.length = this.password.length;
  }

  copyPassword(): void {
    navigator.clipboard.writeText(this.password).then(() => {
      Swal.fire({
        title: '¡Contraseña copiada!',
        text: 'La contraseña se ha copiado al portapapeles.',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000
      });
    });
  }

  savePassword(): void {
    this.passwordService.savePassword(this.userService, this.userName, this.password)
    .then(() => {
      Swal.fire({
        title: '¡Contraseña guardada!',
        text: 'Tu contraseña ha sido guardada exitosamente. Redirigiendo...',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500, // Tiempo en milisegundos (2 segundos)
        customClass: {
          popup: 'swal-popup',
        },
        buttonsStyling: false,
      }).then(() => {
        this.router.navigate(['/home']);
      });
    })
    .catch(error => {
      Swal.fire({
        title: 'Error',
        text: 'Error al guardar la contraseña. Por favor, inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      });
      console.error(error);
    });
  }
}
