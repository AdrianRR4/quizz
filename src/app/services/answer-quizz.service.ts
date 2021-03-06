import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questionnarie } from '../models/Questionnarie';

@Injectable({
  providedIn: 'root'
})
export class AnswerQuizzService {

  nameparticipante='';
  questionnarie!:Questionnarie;

  constructor(private angularFirestore:AngularFirestore) { }

  searchByCode(code:string):Observable<any>{
    
   return this.angularFirestore.collection('questionnaire', ref=>ref.where('codigo','==',code )).get();

  }
}
