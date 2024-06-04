import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeServiceService {
  private generatedCode: string = ''; // Almacena el código generado

  constructor() { }

  setGeneratedCode(code: string) {
    this.generatedCode = code;
  }

  getGeneratedCode(): string {
    return this.generatedCode;
  }
}
