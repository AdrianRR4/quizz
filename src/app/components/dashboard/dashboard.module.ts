import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionsComponent } from './questions/questions.component';
import { ListQuestionnairesComponent } from './list-questionnaires/list-questionnaires.component';
import { CreateQuizzComponent } from './create-quizz/create-quizz.component';
//import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ListQuestionsComponent } from './list-questions/list-questions.component';

import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { SeeQuestionarieComponent } from './see-questionarie/see-questionarie.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    QuestionsComponent,
    ListQuestionnairesComponent,
    CreateQuizzComponent,
  
    ListQuestionsComponent,
    
    CreateQuestionsComponent,
         SeeQuestionarieComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    //ReactiveFormsModule
    SharedModule
  ]
})
export class DashboardModule { }
