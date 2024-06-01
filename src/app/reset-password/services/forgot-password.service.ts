import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private apiUrl = 'http://localhost:3000/api/auth/request-reset-password'

  constructor(private http: HttpClient) { }

  sendForgotPasswordEmail(email: string) {
    try {
      console.log(email)
      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json' // Set the Content-Type header
      // });
      const data = this.http.patch( this.apiUrl, { email });
      console.log( data );

      return data;
    } catch (error) {
      throw error;
    }
  }
}