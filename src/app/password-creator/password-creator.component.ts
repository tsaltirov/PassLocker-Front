import { Component } from '@angular/core';
import { PasswordCreateService } from './services/password-create.service';

@Component({
  selector: 'app-password-creator',
  templateUrl: './password-creator.component.html',
  styleUrls: ['./password-creator.component.css']
})
export class PasswordCreatorComponent {
  userService: string = '';
  userName: string = '';
  password: string = '';
  length: number = 9 ;

  constructor(private passwordService: PasswordCreateService) { 
    this.generatePassword();
  }

  generatePassword(): void {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    this.password = Array(this.length || 9).fill(chars).map(x => x[Math.floor(Math.random() * x.length)]).join('');
    this.length = this.password.length;
  }

  copyPassword(): void {
    navigator.clipboard.writeText(this.password).then(() => {
      alert('Contraseña copiada!');
    });
  }

  savePassword(): void {
    this.passwordService.savePassword(this.userService, this.userName, this.password)
      .then(() => {
        alert('Password saved successfully!');
      })
      .catch(error => {
        alert('Error saving password. Please try again.');
        console.error(error);
      });
  }
}
