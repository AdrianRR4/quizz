import { Answers } from "./Answers";

export class Question{

    title:string;
    points:number;
    seconds:number;
    listAnswer:Answers[];


    constructor(title:string, points:number, seconds:number, listAnswers:Answers[]){
        this.title=title;
        this.points=points;
        this.seconds=seconds;
        this.listAnswer=listAnswers;

    }

}