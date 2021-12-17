import { Question } from "./Question";

export class Questionnarie{

    id?:string;
    uid:string;
    title:string;
    description:string;
    codigo:string;
    amontQuestion:number;
    dateCreate:Date;
    listQuestions:Question[];

    constructor( uid:string,  title:string, description:string, codigo:string, amontQuestion:number, dateCreate:Date,  listQuestions:Question[] ){

        this.uid=uid;
        this.title=title;
        this.description=description;
        this.codigo=codigo;
        this.amontQuestion=amontQuestion;
        this.dateCreate=dateCreate;
        this.listQuestions=listQuestions;
    }

}