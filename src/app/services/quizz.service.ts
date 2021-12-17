import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Question } from '../models/Question';
import { Questionnarie } from '../models/Questionnarie';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  titleCuestionario:string='';
  description:string='';
  private question$=new Subject<Question>();
 
  constructor(private fireStore:AngularFirestore) { }


  addQuestion(question:Question){
    this.question$.next(question);
  }

  getQuestions(): Observable<Question>{
      return this.question$.asObservable();
  }

  createCuestionari(questionnarie:Questionnarie):Promise<any>{
        
   return  this.fireStore.collection('questionnaire').add(questionnarie);
  }

  getQuestionariesByIdUser(uid:string):Observable<any>{
    return this.fireStore.collection('questionnaire', ref=>ref.where('uid', '==', uid)).snapshotChanges();

  }

  deleteQuestionnarie(idQuestionnaire:string):Promise<any>{
    return this.fireStore.collection('questionnaire').doc(idQuestionnaire).delete();
  }

  getQuestionnarie(id:string):Observable<any>{
   return this.fireStore.collection('questionnaire').doc(id).get();
  }
}
