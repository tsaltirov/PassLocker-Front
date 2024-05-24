import { Component } from '@angular/core';
import axios from 'axios';

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
  
  constructor(){
    this.email = ''
    this.fullName = ''
    this.password = ''
    this.confirmPassword = ''
    this.userType = ''
  }


  sendValues(){
    console.log(this.email,this.fullName,this.password,this.confirmPassword,this.userType)

    if (this.password === this.confirmPassword){
      const user = {
        email: this.email,
        fullName: this.fullName,
        password: this.password,
        userType: this.userType
      }

      axios.post('http://localhost:3000/api/auth/registerMail', user)

      .then(response => {
        alert('Confirma tu cuenta en tu email');
        console.log(response.data);
        
      })
      .catch(error => {
        console.error('Error al registrar el usuario', error);
      });

  } else {
    console.log('Las contraseñas no coinciden');
  }
}
}
