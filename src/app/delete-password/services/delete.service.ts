import { Injectable } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private apiUrl = 'http://localhost:3000/api/pass-handler';

  constructor(private authService: LoginService) { }


  async deletePassword(id: string): Promise<void> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token available');
    }

    const url = `${this.apiUrl}/${id}`


    try {
      await axios.delete(url, { headers: { 'Authorization': `Bearer ${token}` } });
      console.log('se elimino', id);
      
    } catch (error) {
      console.error('Error al eliminar :', error);
    
      throw error;
    }
  }
}
