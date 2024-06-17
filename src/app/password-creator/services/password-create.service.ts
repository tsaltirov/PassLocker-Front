import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../../login/services/login.service';
import { environment } from '../../environments/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordCreateService {

  private apiUrl = `${environment.apiUrl}/pass-handler/create`;

  constructor(private authService: LoginService) {}

  savePassword(userService: string, userName: string, password: string): Promise<void> {
    const token = this.authService.getToken();
    if (!token) {
      return Promise.reject('No token available');
    }

    return axios.post(
      this.apiUrl,
      { userService, userName, password },
      { headers: { 'Authorization': `Bearer ${token}` } }
    )
    .then(response => {
      // Handle successful response if needed
    })
    .catch(error => {
      console.error('Error saving password', error);
      throw error;
    });
  }
}
