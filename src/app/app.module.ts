import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedModule } from './components/shared/shared.module';

import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './components/dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,


  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    DashboardModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
