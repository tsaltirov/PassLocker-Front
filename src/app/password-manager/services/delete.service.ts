import { Injectable } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private apiUrl2 = 'http://localhost:3000/api/pass-handler';

  constructor(private authService: LoginService) { }

  async deletePassword(id: string): Promise<void> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token available');
    }

    const url = `${this.apiUrl2}/${id}`;

    try {
      await axios.delete(url, { headers: { 'Authorization': `Bearer ${token}` } });
    } catch (error) {
      console.error('Error al eliminar contraseña:', error); // Añadido un mensaje más descriptivo
      throw error;
    }
  }
}