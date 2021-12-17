import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuizzService } from '../../../services/quizz.service';
import { Questionnarie } from '../../../models/Questionnarie';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-questionnaires',
  templateUrl: './list-questionnaires.component.html',
  styleUrls: ['./list-questionnaires.component.css']
})
export class ListQuestionnairesComponent implements OnInit, OnDestroy {

  subscriptionUser:Subscription= new Subscription();
  subscriptionQuizz:Subscription= new Subscription();
  listQuestionnarie:Questionnarie[]=[];
  loading=false;
  constructor(private afAuth:AngularFireAuth, private router:Router,
              private quizzService:QuizzService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  this.loading=true;
   this.subscriptionUser= this.afAuth.user.subscribe(data=>{
     
      if(data && data.emailVerified){
    this.getQuestionnarie(data.uid)
      }else{
        this.router.navigate(['/node_modules'])
      }
    })

  }

  ngOnDestroy():void{
    this.subscriptionUser.unsubscribe();
    this.subscriptionQuizz.unsubscribe();
  }

  
  getQuestionnarie(uid:string){
this.subscriptionQuizz=this.quizzService.getQuestionariesByIdUser(uid).subscribe(data=>{
      this.listQuestionnarie=[];
      this.loading=false;
      console.log('Lista cuestionarios',data);
      data.forEach((element:any) => {
        this.listQuestionnarie.push({ 
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
        //(console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
       
      });
      console.log(this.listQuestionnarie);
    },error=>{
      console.log(error);
      this.loading=false;
    });
  }

  deleteQuestionnaire(id:string){
    this.loading=true;
console.log(id);
this.quizzService.deleteQuestionnarie(id).then(data=>{
  this.toastr.success('Cuestionario eliminado','Registro eliminado');
  this.loading=false;
}).catch(()=>{
  this.loading=false;
  this.toastr.success('Error detectado','Error!');
})
  }

}
