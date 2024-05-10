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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoPassLockerComponent,
    FormularioLoginComponent,
    FondoComponent,
    RegisterComponent,
    FormRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
