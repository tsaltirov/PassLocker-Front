import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor() { }

  requestPasswordReset(email: string) {
    return axios.patch(`${environment.apiUrl}/auth/request-reset-password`, {
      email: email
    });
  }

  resetPassword(resetPasswordToken: string, password: string): Promise<any> {

    const url = `${environment.apiUrl}/auth/reset-password`;
    return axios.patch(url, { resetPasswordToken, password })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
}
