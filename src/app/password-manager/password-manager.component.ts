
import { Component, OnInit } from '@angular/core';
import { PasswordService } from './services/password.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteService } from './services/delete.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../login/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['./password-manager.component.css']
})
export class PasswordManagerComponent implements OnInit {

  passwords: any[] = [];
  passwordFieldType: string = 'password';
  userFullName: string | null = '';  

  constructor(private passwordService: PasswordService, private router:Router, private loginService: LoginService, private deleteService: DeleteService,  private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPasswords();
    this.userFullName = this.loginService.getFullName();
  }

  async loadPasswords(): Promise<void> {
    try {
      this.passwords = await this.passwordService.getPasswords();
    } catch (error) {
      console.error('Error fetching passwords:', error);
    }
  }

  togglePasswordVisibility(index: number): void {
    this.passwords[index].isPasswordVisible = !this.passwords[index].isPasswordVisible;
  }

  addPassword(): void {
    this.router.navigate(['/createPassword'])
  }

  modifyPassword(id: string): void {
    this.router.navigate(['/modificarContraseña', id]);
  }


  openDeleteConfirmationModal(id: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deletePassword(id);
      }
    });
  }

  async deletePassword(id: string): Promise<void> {
    try {
      await this.deleteService.deletePassword(id);
      await this.loadPasswords();
      Swal.fire(
        'Eliminado!',
        'La contraseña ha sido eliminada.',
        'success'
      );
    } catch (error) {
      console.error('Error al eliminar la contraseña:', error);
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']).then(() => {
    window.location.reload(); // Fuerza la recarga de la página
  });
  }

}
