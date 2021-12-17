import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

  recuperarForm:FormGroup;
  loading=false;

  constructor(private fb:FormBuilder ,
              private auth:AngularFireAuth, 
              private router:Router,
              private toastr: ToastrService,
              private errorService:ErrorService) {

    this.recuperarForm=this.fb.group({
        
      user :['',[Validators.required,Validators.email]]
    })
  
  }

  ngOnInit(): void {
  }

  recuperarPassword(){

    const correo= this.recuperarForm.get('user')?.value;
    this.loading=true;
   this.auth.sendPasswordResetEmail(correo).then(()=>{
    this.toastr.info('Te enviamos un correo electronico para restablecer su contraseña', 'Restablecer contraseña')
      this.router.navigate(['/usuario']);
   }).catch(error=>{
     this.loading=false;
     console.log(error);
     this.toastr.error(this.errorService.error(error.code),'Error!');
   })
    
}

}