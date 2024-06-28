import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../../login/services/login.service';
import { environment } from '../../environments/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ModdifyserviceService {

  private apiUrl = `${environment.apiUrl}/pass-handler`;

  constructor(private authService: LoginService) { }


  async getPasswordById(id: string): Promise<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token available');
    }

    const url = `${this.apiUrl}/${id}`;

    try {
      const response = await axios.get(url, { headers: { 'Authorization': `Bearer ${token}` } });
      return response.data;
    } catch (error) {
      console.error('Error fetching password:', error);
      throw error;
    }
  }



  async modifyPassword(id: string, userService: string, userName: string, password: string): Promise<void> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token available');
    }

    const url = `${this.apiUrl}/${id}`; // falta el id de la contraseña que se quiera modificar
    const data = {
      userService,
      userName,
      password
    };

    try {
      await axios.patch(url, data, { headers: { 'Authorization': `Bearer ${token}` } });
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
  }
}
