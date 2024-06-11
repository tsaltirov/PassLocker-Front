import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private passwords = [
    { service: 'Example Service', username: 'user1', password: 'password1' },
    { service: 'Another Service', username: 'user2', password: 'password2' }
  ];

  constructor() {}

  getPasswords() {
    return this.passwords;
  }

  addPassword(service: string, username: string, password: string) {
    this.passwords.push({ service, username, password });
  }
}
