import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SendCodeService } from '../services/send-code.service';
import { CodeServiceService } from '../services/code-service.service';
@Component({
  selector: 'app-create-code',
  templateUrl: './create-code.component.html',
  styleUrl: './create-code.component.css'
})
export class CreateCodeComponent {
  code: string = ''; // Código ingresado por el usuario
  generated:string = '';

  constructor(private router: Router, private sendCode: SendCodeService,
    private codeService: CodeServiceService) {
      this.generated = this.codeService.getGeneratedCode()
    }

    ngOnInit():void {
      try{
        const email = this.codeService.getEmail();
        if(this.generated == ''){
          console.log('vacio')
        }
        else{
          const response = this.sendCode.sendLoginRequest(email,this.generated)
        }
      }catch(error){
        console.error('error al enviar la solicitud de login', error)
      }
    } 

  verifyCode() {
    const storedCode = localStorage.getItem('generatedCode'); // Obtener el código almacenado en localStorage
    if (this.generated === this.code) { // Comparar el código ingresado con el código almacenado
      Swal.fire({
        title: "Autentificacion realizada exitosamente",
        icon: 'success',
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "OK",
    })
      localStorage.setItem('generatedCode', this.generated);
      this.router.navigate(['./home'])
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Codigo Incorrecto"
      });
    }
  }
}


