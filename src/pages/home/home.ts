import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private authPro:AuthProvider) {

  }
  logOut(){
    this.authPro.signOut().then(()=>{
      this.navCtrl.setRoot(LoginPage);
    })
  }
}
