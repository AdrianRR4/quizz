import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ErrorService } from '../../../services/error.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loading=false;  

  constructor( private fb:FormBuilder, 
              private auth:AngularFireAuth,
              private errorService:ErrorService,
              private toastr: ToastrService,
              private router:Router
              ) { 

    this.loginForm=this.fb.group({
      user:['',[Validators.required,Validators.email]],
      password:['', Validators.required]

    });

  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm);

    const user=this.loginForm.get('user')?.value;
    const password=this.loginForm.get('password')?.value;

    this.loading=true;
    this.auth.signInWithEmailAndPassword(user,password).then((response)=>{
        console.log(response);
      
        if(response.user?.emailVerified===false){
              
this.router.navigate(['/usuario/verifyEmail'])
        }else{
          //se redirecciona al dashboard
          this.setLocalStorage(response.user);
          this.router.navigate(['/dashboard'])
        }


        this.loading=false;
    }, error =>{
      console.log(error);
      this.loading=false;
      this.toastr.error( this.errorService.error(error.code),'Error!');
      this.loginForm.reset();
    })
  }

  setLocalStorage(user:any){
    
    const usuario:User={
      uid: user.id,
      email:user.email
    }
    localStorage.setItem('user',JSON.stringify(user));
  }

}
