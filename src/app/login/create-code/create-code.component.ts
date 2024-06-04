import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-code',
  templateUrl: './create-code.component.html',
  styleUrl: './create-code.component.css'
})
export class CreateCodeComponent {
  code: string = ''; // Código ingresado por el usuario

  constructor(private router: Router) {}

  verifyCode() {
    const storedCode = localStorage.getItem('generatedCode'); // Obtener el código almacenado en localStorage
    if (storedCode === this.code) { // Comparar el código ingresado con el código almacenado
      console.log('Los códigos coinciden');
      this.router.navigate(['./singup'])
    } else {
  
    }
  }
}


