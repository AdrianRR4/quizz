import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzService } from '../../../services/quizz.service';
import { Questionnarie } from '../../../models/Questionnarie';

@Component({
  selector: 'app-see-questionarie',
  templateUrl: './see-questionarie.component.html',
  styleUrls: ['./see-questionarie.component.css']
})
export class SeeQuestionarieComponent implements OnInit {

  id:string;
  loading=false;
  questionnarie:Questionnarie | undefined;
  constructor(private quizzService:QuizzService, private aRoute:ActivatedRoute) { 
    this.id=this.aRoute.snapshot.paramMap.get('id')|| '' ;
  }

  ngOnInit(): void {
this.getQuestionnarie();

  }


  getQuestionnarie(){
    this.loading=true;
    this.quizzService.getQuestionnarie(this.id).subscribe(doc=>{
      this.questionnarie=doc.data();//
      console.log(doc.data())
      this.loading=false;
    }, error=>{
      this.loading=false;
      console.log(error);
    });
    
  }
}
