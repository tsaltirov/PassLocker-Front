import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
      Swal.fire({
        title: "Los códigos coinciden",
        icon: 'success',
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "OK",
    })
      console.log('Los códigos coinciden');
      this.router.navigate(['./singup'])
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Codigo Incorrecto"
      });
    }
  }
}


