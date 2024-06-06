import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SendCodeService } from '../services/send-code.service';
import { CodeServiceService } from '../services/code-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  email: string;
  password: string;

  constructor(
    private authService: LoginService, 
    private router: Router,  
    private sendCode: SendCodeService, 
    private codeService: CodeServiceService) 
    {  // Inyecta el servicio
    this.email = '';
    this.password = '';
  }

  async sendValuesLogin(): Promise<void> {
    try {
      const data = await this.authService.login(this.email, this.password);
      this.showSuccessMessage();

      // Generar código de 6 cifras
      const code = this.generateCode();
      localStorage.setItem('generatedCode', code);
      this.codeService.setGeneratedCode(code);
      console.log(code);
      

      this.router.navigate(['/verifyCode']);
    } catch (error) {
      console.error('Error al intentar logear', error);
      this.showErrorMessage();
    }
  }

  async verifyAndSendCode(): Promise<void> {
      try {
        const generateCode = this.codeService.getGeneratedCode();
        const response = await this.sendCode.sendLoginRequest(this.email, generateCode);

        console.log('Login Request:', response);
      } catch (error) {
        console.error('Error al enviar solicitud de login', error);
      }
    } 

  private showSuccessMessage(): void {
    Swal.fire({
      title: "Código enviado con éxito",
      text: "Hemos enviado un código a tu correo electrónico. Por favor, revisa tu bandeja de entrada e introduce el código para continuar.",
      icon: 'success',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Continuar"
    });
  }

  private showErrorMessage(): void {
    Swal.fire({
      icon: "error",
      title: "Correo o contraseña incorrectos",
      text: "Por favor, verifica tus datos de acceso. Si no tienes una cuenta, puedes registrarte ahora.",
      showCancelButton: true,
      confirmButtonText: "Intentar de nuevo",
      cancelButtonText: "Registrarse"
    }).then((res) => {
      if(res.isDismissed){
        this.router.navigate(['/singup'])
      }
    });
  }

  private generateCode(): string {
    // Generar código de 6 cifras
    return (Math.floor(100000 + Math.random() * 900000)).toString();
  }

}  

