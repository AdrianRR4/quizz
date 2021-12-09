import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  registerForm:FormGroup;
  loading=false;
  
  constructor(private fb:FormBuilder, private auth:AngularFireAuth, private router:Router,private toastr: ToastrService) { 

    this.registerForm=this.fb.group({
      user:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      repeatPassword:['']
    },{validator:this.checkPassword})

  }

  ngOnInit(): void {
  }
  register(){
    console.log(this.registerForm);
    const user=this.registerForm.get('user')?.value;
    const password=this.registerForm.get('password')?.value;
    this.loading=true;
    console.log(user, password)

    this.auth.createUserWithEmailAndPassword(user,password).then(response=>{
      console.log(response);
      this.toastr.success('Usuario registrado!', 'Completado!');
      this.router.navigate(['/usuario']);
    }).catch(error=>{
      this.loading=false;
      console.log(error);
      this.toastr.error( this.error(error.code),'Error!')
    })
 }

  checkPassword(group:FormGroup):any{

    const pass=group.controls.password?.value;
    const confirmPass=group.controls.repeatPassword?.value;
    console.log(pass);
    console.log(confirmPass); 

    return pass===confirmPass ? null:{notSame:true}
  }

  error(code: string):string
  {
      
      switch(code){
        
        //corre ya registrado

        case 'auth/email-already-in-use':
          return 'El correo ya esta registrado'
  
          //correo invalido

          case 'auth/invalid-email':
            return 'El correo ya existe'
      
            //contraseña debil
            
          case 'auth/weak-password':
            return 'Contraseña vulnerable'

        default:
          return 'Error desconocido'

      }

    }

}
