import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnswerQuizzService } from '../../services/answer-quizz.service';

import { Questionnarie } from '../../models/Questionnarie';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy  {

  error=false;
  pin='';
  errorText='';
  loading=false;
  subscriptionCode:Subscription= new Subscription();
  constructor(private answerQuizzService:AnswerQuizzService,private router:Router) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
      this.subscriptionCode.unsubscribe();
  }

  ingresar(){  

if(this.pin==''){
      
  this.errorMessage('Ingrese el pin'); 
  return;
    }
    this.loading=true;
  this.subscriptionCode=  this.answerQuizzService.searchByCode(this.pin).subscribe(response=>{  
      console.log(response);
      this.loading=false;
      if(response.empty){
        this.errorMessage('Ingrese un PIN valido');
      }else{
        response.forEach((element:any) => {
          const questinnarie:Questionnarie={
            id:element.id,
            ...element.data()
          }
          this.answerQuizzService.questionnarie=questinnarie;
          console.log(questinnarie);
          //redireccionar al proximo componenete
          this.router.navigate(['/play'])
        });
      }
    }, error=>{
      console.log(error);
      this.loading=false;
    });
  }  
  
  errorMessage(text:string){

    this.errorText=text;
    this.error=true;
    this.pin='';

    //mostrar error por 4 segundos

    setTimeout(() => {
      this.error=false;
    }, 4000);

  }


}
  

