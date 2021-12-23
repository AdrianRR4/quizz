import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-counter',
  templateUrl: './initial-counter.component.html',
  styleUrls: ['./initial-counter.component.css']
})
export class InitialCounterComponent implements OnInit, OnDestroy {

  counter=3;
  setInterval:any;

  constructor(private router:Router) { }
  
  ngOnDestroy(): void {
    clearInterval(this.setInterval);
  }

  ngOnInit(): void {
    this.playInitialCount();
  }

  

  playInitialCount(){

   this.setInterval= setInterval(()=>{
      console.log('que onda!')
      if(this.counter===0){
      
        this.router.navigate(['/play/doQuestionnarie']);

      }
      this.counter=this.counter-1;
    },1000) 
  }
}
