import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private apiUrl = 'http://localhost:3000/api/pass-handler/findAll';

  constructor(private authService: LoginService) {}

  async getPasswords(): Promise<any[]> {

    try {
      const token = this.authService.getToken();
      if (!token) {
        throw new Error('No token available');
      }

      // Configura el encabezado de la solicitud con el token de acceso
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      // Realiza la solicitud HTTP con el encabezado configurado
      const response = await axios.get(this.apiUrl, config);
      return response.data;
    } catch (error) {
      console.error('Error fetching passwords:', error);
      throw error;
    }
  }
}
