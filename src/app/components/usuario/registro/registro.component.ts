import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  registerForm:FormGroup;
  
  constructor(private fb:FormBuilder) { 

    this.registerForm=this.fb.group({
      user:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      repeatPassword:['  ']

    })

  }

  ngOnInit(): void {
  }
  register(){
    console.log(this.registerForm)
  }

}
