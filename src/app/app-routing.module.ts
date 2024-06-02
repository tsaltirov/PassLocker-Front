import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterVerifyComponent } from './register-verify/register-verify.component';
import { ForgotpasswordComponent } from './reset-password/forgotpassword/forgotpassword.component';
import { VerifyForgotpasswordComponent } from './reset-password/verify-forgotpassword/verify-forgotpassword.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: RegisterComponent
  },
  {
    path: 'registerverify',
    component: RegisterVerifyComponent
  },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent
  },
  {
    path: 'reset-password',
    component: VerifyForgotpasswordComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
