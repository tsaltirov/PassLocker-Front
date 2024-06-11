
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

  constructor(private passwordService: PasswordService, private router: Router) {}

  ngOnInit(): void {
    this.passwords = this.passwordService.getPasswords();
  }

  addPassword(): void {
    this.router.navigate(['/createPassword'])
  }
}
