import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { RegisterService } from '../register/form-register/services/register.service';
import { FormRegisterComponent } from '../register/form-register/form-register.component';
import axios from 'axios';
import Swal from 'sweetalert2';

@Injectable()
@Component({
  selector: 'app-register-verify',
  templateUrl: './register-verify.component.html',
  styleUrl: './register-verify.component.css',
  providers: [RegisterService]
})
export class RegisterVerifyComponent implements OnInit {
  public email: string;
  public password: string;
  public fullName: string;
  public userType: string;
  constructor(private _route: ActivatedRoute, private router: Router) {
    this.email = '';
    this.password = '';
    this.fullName = '';
    this.userType = '';
  }

  ngOnInit(): void {
    this.email = this._route.snapshot.queryParams['email'];
    this.password = this._route.snapshot.queryParams['password'];
    this.fullName = this._route.snapshot.queryParams['fullName'];
    this.userType = this._route.snapshot.queryParams['userType'];

    const user = {
      email: this.email,
      fullName: this.fullName,
      password: this.password,
      userType: this.userType
    }


    axios.post('http://localhost:3000/api/auth/register-account', user)

      .then(response=> {
        this.router.navigate(['']);
        Swal.fire({
          title: "Usuario registrado con éxito!",
          text: "Ya puede loguear en su cuenta",
          imageUrl: "../../../assets/Imagenes-passLocker/ok.png",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "OK",

        })

      })
      .catch(error => {
        console.error('Error al registrar el usuario', error);
      });
  }
}
