import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SendCodeService {
  private apiUrl = 'http://localhost:3000/api/auth/login-request';

  constructor() { }

  async sendLoginRequest(email: string, code: string) {
    try {
      const response = await axios.post( this.apiUrl, { email, code });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
