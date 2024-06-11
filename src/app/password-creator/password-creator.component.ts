import { Component } from '@angular/core';

@Component({
  selector: 'app-password-creator',
  templateUrl: './password-creator.component.html',
  styleUrls: ['./password-creator.component.css']
})
export class PasswordCreatorComponent {
  service: string = '';
  username: string = '';
  password: string = '';
  length: number = 9 ;

  constructor() {
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

    console.log('Service:', this.service);
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
