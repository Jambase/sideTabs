import { LoginPage } from './../pages/login/login';
import { FavoritesPage } from './../pages/favorites/favorites';
import { ProfilePage } from './../pages/profile/profile';
import { LogoutPage } from './../pages/logout/logout';
import { TabsPage } from './../pages/tabs/tabs';
import { MenuPage } from './../pages/menu/menu';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase'
import { HomePage } from '../pages/home/home';

export const config = {
  apiKey: "AIzaSyDBZ5GZiR6gRTwhAIvhjcgHtM-eS2Rg2BM",
  authDomain: "recipeproject-b080b.firebaseapp.com",
  databaseURL: "https://recipeproject-b080b.firebaseio.com",
  projectId: "recipeproject-b080b",
  storageBucket: "recipeproject-b080b.appspot.com",
  messagingSenderId: "689720004385"
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  isUser: any;

  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config)
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        console.log("firebase user not available",user)
        this.isUser = false;
        this.rootPage = LoginPage;
      
        unsubscribe();
      }else if(user.isAnonymous==true){
        this.pages = [
          { title: 'home', component: TabsPage },
  
           { title: 'Logout', component: LoginPage }
        ];
        unsubscribe();
      }
       else {
        console.log("firebase user available",user)
        this.isUser = true;
        this.rootPage = TabsPage;
       
        this.pages = [
          { title: 'home', component: TabsPage },
          { title: 'profile', component: ProfilePage },
          { title: 'favorites', component: FavoritesPage },
         { title: 'Logout', component: LoginPage }
        ];
        unsubscribe();
      }
    });
    // used for an example of ngFor and navigation

    //Also, we have a list of pages that will show up in the side menu
   
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.nav.push(ProfilePage)
    
  }

}

