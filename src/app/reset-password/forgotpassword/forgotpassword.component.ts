// forgotpassword.component.ts
import { Component } from '@angular/core';
import { ForgotpasswordService } from '../services/forgot-password.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  forgotPasswordForm:any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private forgotpasswordService: ForgotpasswordService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Getter para acceder al campo de email más fácilmente en la plantilla
  get email() {
    return this.forgotPasswordForm.get('email');
  }

  sendForgotPassword() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    const email = this.email.value;

    this.forgotpasswordService.requestPasswordReset(email)
      .then(response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Correo Enviado con éxito!',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          this.router.navigate(['/']); 
        });
      })
      .catch(error => {
        console.error('There was an error!', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El usuario no existe...'
        });
      });
  }
}
