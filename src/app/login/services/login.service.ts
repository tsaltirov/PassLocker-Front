import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${environment.apiUrl}/auth`;

  constructor() { }

  async login(email: string, password: string) {
    try {
      const response = await axios.post(`${this.apiUrl}/login`, { email, password });
      const accessToken = response.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      const userFullName = response.data.userFullName;
      localStorage.setItem('userFullName', userFullName);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getFullName(): string |  null {
    return localStorage.getItem('userFullName')
  }
}
