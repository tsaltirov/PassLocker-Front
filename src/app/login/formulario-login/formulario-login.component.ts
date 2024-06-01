import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  email: string;
  password: string;

  constructor(private authService: LoginService) {  // Inyecta el servicio
    this.email = '';
    this.password = '';
  }

  async sendValuesLogin() {
    try {
      const data = await this.authService.login(this.email, this.password);
      console.log('Login:', data);
    } catch (error) {
      console.error('Error al intentar logear', error);
    }
  }
}  

