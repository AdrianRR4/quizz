import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    RecuperarPasswordComponent

  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,

    
  ]
})
export class UsuarioModule { }
