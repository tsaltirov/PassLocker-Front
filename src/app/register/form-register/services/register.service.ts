import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = `${environment.apiUrl}/auth/registerMail` 

  registerUser(user: any) {
    return axios.post(this.apiUrl, user);
  }
}
