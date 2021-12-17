export class Answers{

    description:string;
    isRight:boolean | undefined;

    constructor( description:string, isRight:boolean){

        this.description=description;
        this.isRight=isRight;
    }
}


