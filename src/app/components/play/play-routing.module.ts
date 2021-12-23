import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetIntoNameComponent } from './get-into-name/get-into-name.component';
import { InitialCounterComponent } from './initial-counter/initial-counter.component';
import { DoQuestionnarieComponent } from './do-questionnarie/do-questionnarie.component';

const routes: Routes = [
  {
    path:'',component:GetIntoNameComponent
  },
  {
    path:'startCount',component:InitialCounterComponent
  },
  {
    path:'doQuestionnarie',component:DoQuestionnarieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
