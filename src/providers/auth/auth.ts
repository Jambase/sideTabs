import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  
  isUser: any;

  constructor() {
    console.log('Hello AuthProvider Provider');
  }
//login as a guest not a registered app user
anonLogin(): Promise<any> {

  return firebase.auth().signInAnonymously()
    .then(response => {
      console.log(response);
    })
}
signOut():Promise<any>{
  const userId:string = firebase.auth().currentUser.uid;
  firebase.database().ref(`/userProfile/${userId}`).off();
  return firebase.auth().signOut();
}



}