import { Component } from '@angular/core';

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

  
}
