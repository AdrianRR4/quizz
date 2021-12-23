import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerQuizzService } from '../../../services/answer-quizz.service';

@Component({
  selector: 'app-get-into-name',
  templateUrl: './get-into-name.component.html',
  styleUrls: ['./get-into-name.component.css']
})
export class GetIntoNameComponent implements OnInit {

  name='';
  errorText='';
  error=false;
  constructor(private answerQuizzService:AnswerQuizzService,
              private router:Router) { }

  ngOnInit(): void {
  this.validateRefresh();
  }
  introName(){

    if(this.name===''){
    this.errorMessage('Ingrese su nombre');
    return;
    }

console.log(this.name);
this.answerQuizzService.nameparticipante=this.name;
this.router.navigate(['/play/startCount']);

  }

validateRefresh(){
    if(this.answerQuizzService.questionnarie===undefined){
      this.router.navigate(['/']);
    }
}

  errorMessage(text:string){

    this.errorText=text;
    this.error=true;
    

    //mostrar error por 4 segundos

    setTimeout(() => {
      this.error=false;
    }, 4000);

  }
}
