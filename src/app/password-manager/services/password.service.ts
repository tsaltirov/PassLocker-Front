import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../../login/services/login.service';
import { environment } from '../../environments/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private apiUrl = `${environment.apiUrl}/pass-handler/findAll`
  private apiUrl2 =  `${environment.apiUrl}/pass-handler`;

  constructor(private authService: LoginService) {}

  async getPasswords(): Promise<any[]> {
    try {
      const token = this.authService.getToken();
      if (!token) {
        throw new Error('No token available');
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.get(this.apiUrl, config);
      return response.data;
    } catch (error) {
      console.error('Error fetching passwords:', error);
      throw error;
    }
  }

  async deletePassword(id: string): Promise<void> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token available');
    }

    const url = `${this.apiUrl2}/${id}`;

    try {
      await axios.delete(url, { headers: { 'Authorization': `Bearer ${token}` } });
    } catch (error) {
      console.error('Error al eliminar :', error);
      throw error;
    }
  }
}