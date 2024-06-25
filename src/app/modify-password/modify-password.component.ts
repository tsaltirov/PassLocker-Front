import { Component, OnInit } from '@angular/core';
import { ModdifyserviceService } from './services/moddifyservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.css'],
})
export class ModifyPasswordComponent implements OnInit {
  id: string = '';
  nombreDelServicio: string = '';
  nombreDelUsuario: string = '';
  nueva: string = '';

  constructor(private route: ActivatedRoute, private modifyService: ModdifyserviceService, private router:Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
    });
  }

  async modifyPassword() { 
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
        await this.modifyService.modifyPassword(this.id, this.nombreDelServicio, this.nombreDelUsuario, this.nueva);
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
}
cancel() {
    
 
  this.router.navigate(['/home']);

}}
