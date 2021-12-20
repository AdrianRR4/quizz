import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from './spiner/spiner.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AnswerUserComponent } from './answer-user/answer-user.component';



@NgModule({
  declarations: [
    SpinerComponent,
    AnswerUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    SpinerComponent
  ]
})
export class SharedModule { }
