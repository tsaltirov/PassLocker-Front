import { Component } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})

export class FormRegisterComponent {
  registerForm:any = FormGroup;
  passwordFieldType: string = 'password';

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Validators.required y Validators.email
      fullName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/)]],
      userType: ['', Validators.required]
    }, {
      confirmPassword: [''],
      validators: this.passwordMatchValidator // Validador personalizado para confirmar contraseña
    });
  }

  // Getter para acceder a los controles del formulario
  get email() {
    return this.registerForm.get('email');
  }

  get fullName() {
    return this.registerForm.get('fullName');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get userType() {
    return this.registerForm.get('userType');
  }

  // Método para alternar visibilidad de contraseña
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  // Método para enviar valores del formulario
  async sendValues() {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid) {
      return;
    }

    const user = this.registerForm.value;

    try {
      const response = await axios.post(`${environment.apiUrl}/auth/request-register-account`, user);

      if (response.data.message === 'Usuario ya registrado.') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El usuario ya existe...'
        });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Correo enviado con éxito!',
          text: 'Por favor, revisa tu correo electrónico.',
          showConfirmButton: false,
          timer: 2000
        });
      }
    } catch (error) {
      console.error('Error al registrar el usuario', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al registrar el usuario. Por favor, inténtalo de nuevo más tarde.'
      });
    }
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
}
