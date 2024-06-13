// forgotpassword.component.ts
import { Component } from '@angular/core';
import { ForgotpasswordService } from '../services/forgot-password.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  email: string = '';

  constructor(
    private forgotpasswordService: ForgotpasswordService,
    private router: Router
  ) { }

  sendForgotPassword() {
    this.forgotpasswordService.requestPasswordReset(this.email)
      .then(response => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Correo Enviado con éxito!",
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          this.router.navigate(['/']); 
        });
        console.log('Password reset request sent:', response);
      })
      .catch(error => {
        console.error('There was an error!', error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El usuario no existe..."
        });
      });
  }
}
