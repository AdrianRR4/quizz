import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuizzService } from '../../../services/quizz.service';
import { Questionnarie } from '../../../models/Questionnarie';
import { Router } from '@angular/router';
import { nanoid } from 'nanoid'
import { User } from '../../../interfaces/User';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})

export class ListQuestionsComponent implements OnInit {

  listQuestions:Question[]=[];
  titleQuestionarie:string;
  descriptionQuestionarie:string;
  loading =false;

  constructor(private quizzService: QuizzService, private router:Router,  private toastr: ToastrService) {

    this.quizzService.getQuestions().subscribe(response =>{
      this.listQuestions.push(response);
      console.log(response)

      console.log(this.listQuestions);
    })
    
    this.titleQuestionarie=this.quizzService.titleCuestionario;
    this.descriptionQuestionarie=this.quizzService.description;
  }

  ngOnInit(): void {

    if(this.titleQuestionarie==='' || this.descriptionQuestionarie===''){

      this.router.navigate(['/dashboard'])
    }
  }

  delteQuesion(i:number){
this.listQuestions.splice(i, 1);
  }

  finishQuestionari(){

    const codigo=this.generateCode();
    const usuario:User= JSON.parse(localStorage.getItem('user')|| '{}');
   
    const questionari:Questionnarie={
    uid:usuario.uid,
    amontQuestion:this.listQuestions.length,
    dateCreate: new Date(),
    title:this.titleQuestionarie,
    description:this.descriptionQuestionarie,
    codigo:codigo,
    listQuestions:this.listQuestions,

    }
    console.log('entreee',questionari);

    this.loading=true;
    this.quizzService.createCuestionari(questionari).then(
      response=>{ 
       this.toastr.success('Cuestionario registrado con exito','Registrado!')
          this.router.navigate(['/dashboard']);
        
      }).catch(error=>{
        this.loading=false;
        console.log(error)
      })

   
  }

  generateCode():string{

    return nanoid(6).toLocaleUpperCase();

  }
}
