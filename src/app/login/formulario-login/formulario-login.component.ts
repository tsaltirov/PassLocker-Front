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
      //Hago autentificación BBDD
      const data = await this.authService.login(this.email, this.password);
      console.log('Login:', data);

      // Generar código de 6 cifras
      const code = (Math.floor(100000 + Math.random() * 900000)).toString();
        
      this.codeService.setGeneratedCode(code,this.email);
      const code2=this.codeService.getGeneratedCode();
      console.log(code2);
      

      this.router.navigate(['/verifyCode']);
    } catch (error) {
      console.error('Error al intentar logear', error);
    }
  }

  
}  

