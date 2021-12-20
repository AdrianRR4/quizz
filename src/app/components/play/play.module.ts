import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { GetIntoNameComponent } from './get-into-name/get-into-name.component';
import { InitialCounterComponent } from './initial-counter/initial-counter.component';
import { DoQuestionnarieComponent } from './do-questionnarie/do-questionnarie.component';


@NgModule({
  declarations: [
    GetIntoNameComponent,
    InitialCounterComponent,
    DoQuestionnarieComponent
  ],
  imports: [
    CommonModule,
    PlayRoutingModule
  ]
})
export class PlayModule { }
