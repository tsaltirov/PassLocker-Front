import { Component } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})

export class FormRegisterComponent {
  
  email: string;
  fullName: string;
  password: string;
  confirmPassword:string;
  userType:string;

  emailTouched: boolean = false;
  fullNameTouched: boolean = false;
  passwordTouched: boolean = false;
  confirmPasswordTouched: boolean = false;
  userTypeTouched: boolean = false;
  
  constructor(){
    this.email = ''
    this.fullName = ''
    this.password = ''
    this.confirmPassword = ''
    this.userType = ''
  }

  
  get emailValid() {
    return this.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  }

  get emailRequired() {
    return this.email !== '';
  }

  get emailFormatValid() {
    return this.emailValid !== null;
  }

  get fullNameValid() {
    return this.fullName !== '';
  }

  get fullNameRequired() {
    return this.fullName !== '';
  }

  get passwordValid() {
    return this.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/);
  }

  get passwordRequired() {
    return this.password !== '';
  }

  get passwordMinLength() {
    return this.password.length >= 6;
  }

  get passwordPattern() {
    return this.passwordValid !== null;
  }

  get confirmPasswordValid() {
    return this.password === this.confirmPassword;
  }

  get confirmPasswordRequired() {
    return this.confirmPassword !== '';
  }

  get passwordsMatch() {
    return this.password === this.confirmPassword;
  }

  get userTypeValid() {
    return this.userType !== '';
  }

  get userTypeRequired() {
    return this.userType !== '';
  }


  async sendValues() {
    this.emailTouched = true;
    this.fullNameTouched = true;
    this.passwordTouched = true;
    this.confirmPasswordTouched = true;
    this.userTypeTouched = true;

    if (!this.emailValid || !this.fullNameValid || !this.passwordValid || !this.confirmPasswordValid || !this.userTypeValid) {
      return;
    }

    const user = {
      email: this.email,
      fullName: this.fullName,
      password: this.password,
      userType: this.userType
    };

    try {
      const response = await axios.post('http://localhost:3000/api/auth/request-register-account', user);

      if (response.data.message === 'Usuario ya registrado.') {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El usuario ya existe..."
        });
        
        
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Correo Enviado con éxito!",
          showConfirmButton: false,
          timer: 2000
        });
      }
      console.log(response.data);
    } catch (error) {
      console.error('Error al registrar el usuario', error);
    }
  }
}
