import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotpasswordService } from '../services/forgot-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './verify-forgotpassword.component.html',
  styleUrl: './verify-forgotpassword.component.css'
})

export class VerifyForgotpasswordComponent implements OnInit {
  resetPasswordToken: string = '';
  password: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forgotPasswordService: ForgotpasswordService
  ) { }

  ngOnInit(): void {
    this.resetPasswordToken = this.route.snapshot.queryParamMap.get('resetPasswordToken') || '';
  }

  resetPassword() {
    this.forgotPasswordService.resetPassword(this.resetPasswordToken, this.password)
      .then(response => {
        Swal.fire({})
        console.log('Password reset successful:', response);
        this.router.navigate(['/login']);
        
      })
      .catch(error => {
        console.error('Error resetting password!', error);
      });
  }
}
