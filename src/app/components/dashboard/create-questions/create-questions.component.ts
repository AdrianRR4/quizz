import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../../services/quizz.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Answers } from '../../../models/Answers';
import { Question } from '../../../models/Question';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  createQuestionsForm:FormGroup;
  showError=false;

  constructor(private quizzService:QuizzService, private fb:FormBuilder) { 

    this.createQuestionsForm=this.fb.group({
        subject:['', Validators.required],
        seconds:[10, Validators.required],
        points:[1000,Validators.required],
        answer1:this.fb.group({
            name:['',Validators.required],
            right:[false,Validators.required]
        }),
        answer2:this.fb.group({
          name:['',Validators.required],
          right:[false,Validators.required]
      }),
      answer3:this.fb.group({
        name:'',
        right:false
    }),
    answer4:this.fb.group({
      name:'',
      right:false
  })
    })
  }
      
  addQuestion(){
    console.log(this.createQuestionsForm);
    if(this.createQuestionsForm.invalid || this.allIncorrect()){
    this.error();
    return;
    }

    let listAnswer:Answers[]=[]
    // obtener respuesta 1

    const resTitle1=this.createQuestionsForm.get('answer1')?.get('name')?.value;
    const right1=this.createQuestionsForm.get('answer1')?.get('right')?.value;

    const answer1:Answers={
      description:resTitle1,
      isRight:right1
    }
    listAnswer.push(answer1);

    //obtener respuesta 2

    const resTitle2=this.createQuestionsForm.get('answer2')?.get('name')?.value;
    const right2=this.createQuestionsForm.get('answer2')?.get('right')?.value;

    const answer2:Answers={
      description:resTitle2,
      isRight:right2
    }
    listAnswer.push(answer2);

    //obtener respuesta 3

    const resTitle3=this.createQuestionsForm.get('answer3')?.get('name')?.value;
    const right3=this.createQuestionsForm.get('answer3')?.get('right')?.value;

    const answer3:Answers={
      description:resTitle3,
      isRight:right3
    }

    if(resTitle3 !==''){
      listAnswer.push(answer3);
    }
    //respuesta 4
    const resTitle4=this.createQuestionsForm.get('answer4')?.get('name')?.value;
    const right4=this.createQuestionsForm.get('answer4')?.get('right')?.value;

    const answer4:Answers={
      description:resTitle4,
      isRight:right4
    }
    if(resTitle4!==''){
       listAnswer.push(answer4);
    }
   
     // console.log('contenido de lista de respuestas',listAnswer)
       
     //Crear pregunta
     
     const title=this.createQuestionsForm.get('subject')?.value;
     const seconds=this.createQuestionsForm.get('seconds')?.value;
     const points=this.createQuestionsForm.get('points')?.value;

     const question:Question={

      title:title,
      seconds:seconds,
      points:points,
      listAnswer:listAnswer

     }
     this.quizzService.addQuestion(question);
     this.reset();
     console.log(question);

  }
  
  ngOnInit(): void {

    console.log('titulo',this.quizzService.titleCuestionario);
    console.log('description',this.quizzService.description);
  }

  get seg(){return this.createQuestionsForm.get('seconds')?.value  }
  get points(){return this.createQuestionsForm.get('points')?.value}

  sumarRestarSegundos(numero:number){

    if(this.seg <=5){
      return;
    }
    this.createQuestionsForm.patchValue({
        seconds:this.seg+numero
    })
  }  
  isCorrect(index:string){

    let stringRta='answer';
    let   noAnswer=stringRta.concat(index);
    this.setFalseAnswer(noAnswer);

    const stateRta=this.getStateOfAnswer(noAnswer )

  this.createQuestionsForm.get(noAnswer)?.patchValue({
    right:!stateRta
  })
  }
  
  getStateOfAnswer(noAnswer:string): boolean{

    //const stateRta=this.getStateOfAnswer(); 
      return this.createQuestionsForm.get(noAnswer)?.get('right')?.value;

  }
  
  setFalseAnswer(noAnswer:string ){

    const array =['answer1', 'answer2', 'answer3','answer4'];

  for (let index = 0; index < array.length; index++) {
    if(array[index]!==noAnswer)
    {
this.createQuestionsForm.get(array[index])?.patchValue({
  right:false
})
    }
    
  }

  }

  error(){

    this.showError=true;  
    setTimeout(() => {
      this.showError=false;
    }, 500);  

  }

  allIncorrect(){

    const array=['answer1','answer2','answer3','answer4']
 
  for (let index = 0; index < array.length; index++) {
    if(this.createQuestionsForm.get(array[index])?.get('right')?.value===true){
      return false;
    }
    
  }
    return true;

  }

  reset(){
    this.createQuestionsForm.patchValue({
      subject:'',
      seconds:10,
      points:1000,
      answer1:{
        name:'',
        right:false
      },
      answer2:{
        name:'',
        right:false
      },
      answer3:{
        name:'',
        right:false
      },
      answer4:{
        name:'',
        right:false
      },

    })
    console.log('entre')
  }

}
