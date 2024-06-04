import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor() { }

  async login(email: string, password: string) {
    try {
      const response = await axios.post(`${this.apiUrl}/login`, { email, password });

      const accessToken = response.data.accessToken;

      return response.data;

    } catch (error) {
      throw error;
    }
  }

}
