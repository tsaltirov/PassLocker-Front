import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordCreateService {
  private apiUrl = 'http://localhost:3000/api/pass-handler/create';

  constructor(private authService: LoginService) { }

  savePassword( userService: string, userName: string, password: string): Promise<void> {

    const token = this.authService.getToken();
    if (!token) {
      return Promise.reject('No token available');
    }

    return axios.post(this.apiUrl, 
      { userService, userName, password },
      { headers: { 'Authorization': `Bearer ${token}` } }
    )
    .then(response => {
      console.log('Password saved successfully', response.data);
    })
    .catch(error => {
      console.error('Error saving password', error);
      throw error;
    });
  }
}