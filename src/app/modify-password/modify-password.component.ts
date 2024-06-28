import { Component, OnInit } from '@angular/core';
import { ModdifyserviceService } from './services/moddifyservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.css'],
})
export class ModifyPasswordComponent implements OnInit {

  id: string = '';
  modifyPasswordForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modifyService: ModdifyserviceService,
    private router: Router
  ) {
    this.modifyPasswordForm = this.fb.group({
      nombreDelServicio: ['', Validators.required],
      nombreDelUsuario: ['', Validators.required],
      nueva: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
    });
  }

  async modifyPassword() {
    if (this.modifyPasswordForm.valid) {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas modificar la contraseña?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, modificarla',
        cancelButtonText: 'Cancelar'
      });

      if (result.isConfirmed) {
        try {
          const { nombreDelServicio, nombreDelUsuario, nueva } = this.modifyPasswordForm.value;
          await this.modifyService.modifyPassword(this.id, nombreDelServicio, nombreDelUsuario, nueva);
          Swal.fire(
            'Modificada',
            'La contraseña ha sido modificada.',
            'success'
          );
          this.router.navigate(['/home']);
        } catch (error) {
          console.error('Error actualizando la contraseña:', error);
          Swal.fire(
            'Error',
            'Hubo un problema al modificar la contraseña.',
            'error'
          );
        }
      }
    } else {
      Swal.fire(
        'Error',
        'Por favor complete el formulario correctamente.',
        'error'
      );
    }
  }

  cancel() {
    this.router.navigate(['/home']);
  }}
