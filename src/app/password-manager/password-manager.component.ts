
import { Component, OnInit } from '@angular/core';
import { PasswordService } from './password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['./password-manager.component.css']
})
export class PasswordManagerComponent implements OnInit {

  passwords: any[] = [];

  constructor(private passwordService: PasswordService, private router:Router) {}

  ngOnInit(): void {
    this.loadPasswords();
  }

  async loadPasswords(): Promise<void> {
    try {
      this.passwords = await this.passwordService.getPasswords();
    } catch (error) {
      console.error('Error fetching passwords:', error);
    }
  }

  addPassword(): void {
    this.router.navigate(['/createPassword'])
  }

  modifyPassword(id: string): void {
    this.router.navigate(['/modificarContraseña', id]);
  }

  logout(): void {
    
    this.router.navigate(['/']);
  }

}
