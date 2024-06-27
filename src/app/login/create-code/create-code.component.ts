import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SendCodeService } from '../services/send-code.service';
import { CodeServiceService } from '../services/code-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-code',
  templateUrl: './create-code.component.html',
  styleUrl: './create-code.component.css'
})
export class CreateCodeComponent {
  codeForm:any = FormGroup;
  generated:string = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private sendCode: SendCodeService,
    private codeService: CodeServiceService
  ) {
    this.generated = this.codeService.getGeneratedCode();
    this.codeForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  ngOnInit(): void {
    try {
      const email = this.codeService.getEmail();
      if (this.generated === '') {
      } else {
        this.sendCode.sendLoginRequest(email, this.generated).then( response => {
          }, error => {
            console.error('Error en la solicitud de inicio de sesión:', error);
          });
      }
    } catch (error) {
      console.error('Error al obtener el código generado', error);
    }
  }

  // Getter para acceder al control 'code' de manera más fácil en la plantilla
  get code() {
    return this.codeForm.get('code');
  }

  verifyCode() {
    const storedCode = localStorage.getItem('generatedCode'); // Obtener el código almacenado en localStorage

    if (this.generated === this.code.value) { // Comparar el código ingresado con el código almacenado
      Swal.fire({
        title: "Autenticación realizada exitosamente",
        icon: 'success',
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "OK",
      });
      localStorage.setItem('generatedCode', this.generated);
      this.router.navigate(['./home']);
      localStorage.removeItem('generatedCode')
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Código Incorrecto"
      });
    }
  }
}