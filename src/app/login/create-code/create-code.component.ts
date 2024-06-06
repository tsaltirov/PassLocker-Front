import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendCodeService } from '../services/send-code.service';
import { CodeServiceService } from '../services/code-service.service';


@Component({
  selector: 'app-create-code',
  templateUrl: './create-code.component.html',
  styleUrl: './create-code.component.css'
})
export class CreateCodeComponent implements OnInit{
  code: string = ''; // Código ingresado por el usuario
  generated:string=''
  constructor(private router: Router,private sendCode: SendCodeService, private codeService: CodeServiceService) {
    this.generated = this.codeService.getGeneratedCode();
  }

  ngOnInit(): void {
    try {
      const email=this.codeService.getEmail();
      
      console.log(this.generated);
      if(this.generated == ''){
        console.log('vacio');
      }
      else{

      
      const response =  this.sendCode.sendLoginRequest(email,this.generated);

      console.log('Login Request:', response);
    }
    } catch (error) {
      console.error('Error al enviar solicitud de login', error);
    }
  
  }

  verifyCode() {
    const storedCode = localStorage.getItem('generatedCode'); // Obtener el código almacenado en localStorage
    if (this.generated === this.code) { // Comparar el código ingresado con el código almacenado
      console.log('Los códigos coinciden');
      localStorage.setItem('generatedCode', this.generated);
      this.codeService.resetall();
      this.router.navigate(['./singup'])
    } else {
  
    }
  }
}


