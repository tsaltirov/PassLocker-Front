import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SendCodeService } from '../services/send-code.service';
import { CodeServiceService } from '../services/code-service.service';


@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  email: string;
  password: string;

  constructor(private authService: LoginService, private router: Router,  private sendCode: SendCodeService, private codeService: CodeServiceService) {  // Inyecta el servicio
    this.email = '';
    this.password = '';
  }

  async sendValuesLogin() {
    try {
      const data = await this.authService.login(this.email, this.password);
      console.log('Login:', data);

      // Generar código de 6 cifras
      const code = (Math.floor(100000 + Math.random() * 900000)).toString();
      
      localStorage.setItem('generatedCode', code);
      this.codeService.setGeneratedCode(code);
      console.log(code)
      

      this.router.navigate(['/verifyCode']);
    } catch (error) {
      console.error('Error al intentar logear', error);
    }
  }

  async verifyAndSendCode() {
      try {
        const generateCode = this.codeService.getGeneratedCode();
        const response = await this.sendCode.sendLoginRequest(this.email, generateCode);

        console.log('Login Request:', response);
      } catch (error) {
        console.error('Error al enviar solicitud de login', error);
      }
    } 
}  

