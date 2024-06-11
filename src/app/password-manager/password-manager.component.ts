
import { Component, OnInit } from '@angular/core';
import { PasswordService } from './password.service';

@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['./password-manager.component.css']
})
export class PasswordManagerComponent implements OnInit {
  passwords: any[] = [];

  constructor(private passwordService: PasswordService) {}

  ngOnInit(): void {
    this.passwords = this.passwordService.getPasswords();
  }

  addPassword(): void {
    // Logic to add a new password
  }
}
