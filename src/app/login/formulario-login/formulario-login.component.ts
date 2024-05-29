import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  email: string;
  password: string;

  constructor(){
    this.email = ''
    this.password = ''
  }

 async sendValuesLogin(){
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email: this.email,
        password: this.password
      });

      console.log('Login:', response.data);

    } catch (error) {
      console.error('Error al intentar logear', error);
    }
  }
  }  

