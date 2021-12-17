import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';  
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { RegistroComponent } from './registro/registro.component';
import { VerificaCorreoComponent } from './verifica-correo/verifica-correo.component';

const routes: Routes = [
  {
   path:'', component:LoginComponent
  },
  {
    path:'recuperarPassword', component:RecuperarPasswordComponent
  },
  {
    path:'register', component:RegistroComponent
  },
  { 
    path:'verifyEmail', component:VerificaCorreoComponent

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
