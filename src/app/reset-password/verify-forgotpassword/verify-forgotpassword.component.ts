import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotpasswordService } from '../services/forgot-password.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './verify-forgotpassword.component.html',
  styleUrl: './verify-forgotpassword.component.css', providers:[ForgotpasswordService]
})

export class VerifyForgotpasswordComponent implements OnInit {
  resetPasswordToken: string = '';
  resetPasswordForm:any = FormGroup;
  passwordMismatch: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private forgotPasswordService: ForgotpasswordService
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator.bind(this) // Bind this context for the validator
    });
  }

  ngOnInit(): void {
    this.resetPasswordToken = this.route.snapshot.queryParamMap.get('token') || '';
  }

  // Getter para acceder a los controles del formulario de manera más fácil en la plantilla
  get password() {
    return this.resetPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }

  // Validador personalizado para confirmar contraseña
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  resetPassword() {
    if (this.resetPasswordForm.invalid) {
      return;
    }

    const newPassword = this.password.value;

    this.forgotPasswordService.resetPassword(this.resetPasswordToken, newPassword)
      .then(response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Contraseña Restablecida exitosamente!',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          this.router.navigate(['/login']);
        });
      })
      .catch(error => {
        console.error('Error resetting password!', error);
      });
  }
}
