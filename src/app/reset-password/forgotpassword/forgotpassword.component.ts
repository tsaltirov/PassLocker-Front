import { Component } from '@angular/core';
import { ForgotPasswordService } from '../services/forgot-password.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  email: string = ''

  constructor(private forgotPasswordService: ForgotPasswordService) {  
  }

  async sendForgotPassword() {
    console.log(this.email)
    try {

    //  this.forgotPasswordService.sendForgotPasswordEmail( this.email ).subscribe( function( data ) {
    //   console.log('Correo de recuperación enviado:', data);
    //  });

      const data = await this.forgotPasswordService.sendForgotPasswordEmail(this.email)
      console.log('Correo de recuperación enviado:', data);
      alert('Correo de recuperación enviado');

    } catch (error) {
      console.error(error);
      alert('Error al intentar enviar el correo')
    }
  }
}
