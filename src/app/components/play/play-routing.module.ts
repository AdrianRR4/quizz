import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetIntoNameComponent } from './get-into-name/get-into-name.component';

const routes: Routes = [
  {
    path:'',component:GetIntoNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
