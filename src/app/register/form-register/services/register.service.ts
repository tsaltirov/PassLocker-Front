import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:3000/api/auth/registerMail' 

  registerUser(user: any) {
    return axios.post(this.apiUrl, user);
  }
  
}
