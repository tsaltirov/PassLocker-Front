
import { Component, OnInit } from '@angular/core';
import { PasswordService } from './services/password.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteService } from './services/delete.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';
import { LoginService } from '../login/services/login.service';


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
    console.log('Full Name:', this.userFullName);
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


  openDeleteConfirmationModal(id:string): void {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent, {
      width: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePassword(id);
      }
    });
  }


    async deletePassword(id:string): Promise<void> {
   
      try{
        await this.deleteService.deletePassword(id)
      
        console.log(`Contraseña con id ${id} eliminada correctamente.`);
        // this.router.navigate(['/home'])
        await this.loadPasswords();
      }
      catch(error){
        console.error('Error al eliminar la contraseña:', error);}
        
     
      ;
  }

  logout(): void {
   
    this.router.navigate(['/']);
  }

}
