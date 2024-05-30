import { Component } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})

export class FormRegisterComponent {
  
  email: string;
  fullName: string;
  password: string;
  confirmPassword:string;
  userType:string;
  
  constructor(){
    this.email = ''
    this.fullName = ''
    this.password = ''
    this.confirmPassword = ''
    this.userType = ''
  }


  sendValues(){
    console.log(this.email,this.fullName,this.password,this.confirmPassword,this.userType)

    if (this.password === this.confirmPassword){
      const user = {
        email: this.email,
        fullName: this.fullName,
        password: this.password,
        userType: this.userType
      }

      axios.post('http://localhost:3000/api/auth/request-register-account', user)

      .then(response => {
        if(response.data.message === 'Usuario ya registrado.')
          {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "El usuario ya existe..."
            });
          }
          else{

          
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Correo Enviado con éxito!",
          showConfirmButton: false,
          timer: 2000
        });
      }
        console.log(response.data);
        
      })
    
      .catch(error => {
        console.error('Error al registrar el usuario', error);
      });

  } else {
    console.log('Las contraseñas no coinciden');
  }
}
}
