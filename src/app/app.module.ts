import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoPassLockerComponent } from './login/logo-pass-locker/logo-pass-locker.component';
import { FormularioLoginComponent } from './login/formulario-login/formulario-login.component';
import { FondoComponent } from './login/fondo/fondo.component';
import { RegisterComponent } from './register/register.component';
import { FormRegisterComponent } from './register/form-register/form-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterVerifyComponent } from './register-verify/register-verify.component';
import { ForgotpasswordComponent } from './reset-password/forgotpassword/forgotpassword.component';
import { VerifyForgotpasswordComponent } from './reset-password/verify-forgotpassword/verify-forgotpassword.component';
import { CreateCodeComponent } from './login/create-code/create-code.component';
import { PasswordCreatorComponent } from './password-creator/password-creator.component';
import { PasswordManagerComponent } from './password-manager/password-manager.component';
import { ModifyPasswordComponent } from './modify-password/modify-password.component';
import { MatDialogModule, MatDialogClose } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoPassLockerComponent,
    FormularioLoginComponent,
    FondoComponent,
    RegisterComponent,
    FormRegisterComponent,
    RegisterVerifyComponent,
    ForgotpasswordComponent,
    VerifyForgotpasswordComponent,
    CreateCodeComponent,
    PasswordCreatorComponent,
    PasswordManagerComponent,
    ModifyPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
