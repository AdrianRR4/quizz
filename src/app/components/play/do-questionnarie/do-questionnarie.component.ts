import { Component, OnInit } from '@angular/core';
import { AnswerQuizzService } from '../../../services/answer-quizz.service';
import { Questionnarie } from '../../../models/Questionnarie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-do-questionnarie',
  templateUrl: './do-questionnarie.component.html',
  styleUrls: ['./do-questionnarie.component.css']
})
export class DoQuestionnarieComponent implements OnInit {

  questionnarie!:Questionnarie;
  nameCompetitor='';

  constructor(private answerQuizzService:AnswerQuizzService,  
              private router:Router) { }

  ngOnInit(): void {
    
    //console.log(this.answerQuizzService.nameparticipante);
    //console.log(this.answerQuizzService.questionnarie);

    this.answerQuizzService.nameparticipante=this.nameCompetitor;
    this.answerQuizzService.questionnarie=this.questionnarie;
    this.validateRefresh(); 
  
  }

validateRefresh(){
    
  if(this.questionnarie===undefined){
    
    this.router.navigate(['/']);

  }
}

getSeconds():number{
  return this.questionnarie.listQuestions[0].seconds;
}

}
