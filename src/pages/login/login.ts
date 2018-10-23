import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,Alert,LoadingController,
  Loading } from 'ionic-angular';
  import { TabsPage } from '../../pages/tabs/tabs';
import firebase from 'firebase';

import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  
  constructor(public navCtrl: NavController,public loadCtrl:LoadingController,
    public alertCtrl:AlertController,
    public navParams: NavParams,private authPro:AuthProvider) {
    
     
  }
  anonLogin(){
    this.authPro.anonLogin();
     this.navCtrl.push(TabsPage)
   }
   ionViewDidLoad() {
     console.log('ionViewDidLoad LoginPage');
     this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
   }
   signIn(phoneNumber: number){
  const appVerifier = this.recaptchaVerifier;
  const phoneNumberString = "+" + phoneNumber;
  firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    .then( confirmationResult => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      let prompt = this.alertCtrl.create({
      title: 'Enter the Confirmation code',
      //prevents user from removing alert without entering

          enableBackdropDismiss: false,
      inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
      buttons: [
        { text: 'Cancel',
          handler: data => { 
             //nav back if u cancel OTP 
          this.navCtrl.pop()
            console.log('Cancel clicked'); }
        },
        { text: 'Send',
          handler: data => {
            confirmationResult.confirm(data.confirmationCode)
              .then(function (result) {
                // User signed in successfully.
                console.log(result.user);
                // ...
              }).catch(function (error) {
                // User couldn't sign in (bad verification code?)
                // ...
              });
          }
        }
      ]
    });
    prompt.present();
    //nav to  Menu Page
   this.navCtrl.push(TabsPage);
  })
  .catch(function (error) {
    console.error("SMS not sent", error);
  });
  
}
}
