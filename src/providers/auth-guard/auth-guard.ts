import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


/*
  Generated class for the AuthGuardProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthGuardProvider {

  private suggestionPageRef:firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.suggestionPageRef=firebase.database().ref(`/userProfile/suggestPage`);
      }
    })
    console.log('Hello AuthGuardProvider Provider');
  }

}
