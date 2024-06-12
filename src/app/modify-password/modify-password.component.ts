import { Component, OnInit } from '@angular/core';
import { ModdifyserviceService } from './services/moddifyservice.service';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrl: './modify-password.component.css'
})
export class ModifyPasswordComponent implements OnInit {
  nombreDelServicio: string = '';
  nombreDelUsuario: string = '';
  nueva: string = '';

  constructor(private modifyService: ModdifyserviceService) {}

  ngOnInit(): void {
    // Si necesitas hacer algo cuando se inicializa el componente, puedes hacerlo aquí.
  }

  async modifyPassword() { 
    try {
      await this.modifyService.modifyPassword(this.nombreDelServicio, this.nombreDelUsuario, this.nueva);
      console.log('Password updated successfully');
    } catch (error) {
      console.error('Error updating password:', error);
    }
  }
}
