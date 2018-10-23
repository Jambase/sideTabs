import { HomePage } from './../home/home';
import { LogoutPage } from './../logout/logout';
import { ProfilePage } from './../profile/profile';
import { FavoritesPage } from './../favorites/favorites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
