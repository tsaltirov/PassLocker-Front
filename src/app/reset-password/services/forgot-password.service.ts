import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor() { }

  requestPasswordReset(email: string) {
    return axios.patch('http://localhost:3000/api/auth/request-reset-password', {
      email: email
    });
  }

  resetPassword(resetPasswordToken: string, password: string): Promise<any> {
    const url = 'http://localhost:3000/api/auth/reset-password';
    return axios.patch(url, { resetPasswordToken, password })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
}
