import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from '../../../services/quizz.service';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.css']
})
export class CreateQuizzComponent implements OnInit {

  createQuizzForm:FormGroup;
  showError=false;

  constructor(private fb:FormBuilder,
              private router:Router,
              private quizzService:QuizzService) {
  
    this.createQuizzForm=this.fb.group({

      title:['',Validators.required],
      description:['',Validators.required]
    });
       
   }


  ngOnInit(): void {
  }

  next(){
  
    if(this.createQuizzForm.invalid){

      this.showError=true;
      setTimeout(() => {
        this.showError=false;
      }, 500);
    }else{
      //si el componente es valido
      this.quizzService.titleCuestionario=this.createQuizzForm.get('title')?.value;
      this.quizzService.description=this.createQuizzForm.get('description')?.value;

      this.router.navigate(['/dashboard/createQuesitons'])

    }

  }

}
