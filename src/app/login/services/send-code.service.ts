import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SendCodeService {

  private apiUrl = `${environment.apiUrl}/auth/login-request`;

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
