import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  error(code: string):string
  {
      
      switch(code){
        
        //corre ya registrado

        case 'auth/email-already-in-use':
          return 'El correo ya esta registrado'
  
          //correo invalido

          case 'auth/invalid-email':
            return 'El correo ya existe'
      
            //contraseña debil
            
          case 'auth/weak-password':
            return 'Contraseña vulnerable'

            case 'auth/user-not-found':
              return 'Usuario invalido'

              case 'auth/wrong-password':
                return 'Contraseña invalida'
                
        default:
          return 'Error desconocido'

      }
     

    }

}
