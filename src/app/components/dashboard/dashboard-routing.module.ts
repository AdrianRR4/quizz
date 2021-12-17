import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuestionnairesComponent } from './list-questionnaires/list-questionnaires.component';
import { CreateQuizzComponent } from './create-quizz/create-quizz.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { SeeQuestionarieComponent } from './see-questionarie/see-questionarie.component';

const routes: Routes = [

  {
    path: '', component:ListQuestionnairesComponent
  },
  {
    path:'createQuizz',component:CreateQuizzComponent
  },
  {
    path:'createQuesitons',component:CreateQuestionsComponent
  },
  {
    path:'seeQuestionnarie/:id',component:SeeQuestionarieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
