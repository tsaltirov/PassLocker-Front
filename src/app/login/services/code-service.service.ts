import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeServiceService {
  private generatedCode: string = ''; // Almacena el código generado
  private email: string = '';

  constructor() { }

  setGeneratedCode(code: string, email:string) {
    this.generatedCode = code;
    this.email = email;
  }

  getGeneratedCode(): string {
    return this.generatedCode;
  }
  
  getEmail():string {
    return this.email
  }

  resetall(){
    this.generatedCode='';
  }
}
