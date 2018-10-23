import { CommunityPage } from './../pages/community/community';
import { SuggestionPage } from './../pages/suggestion/suggestion';
import { TabsPage } from './../pages/tabs/tabs';
import { MenuPage } from './../pages/menu/menu';
import { LogoutPage } from './../pages/logout/logout';
import { ProfilePage } from './../pages/profile/profile';
import { FavoritesPage } from './../pages/favorites/favorites';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from './../providers/auth/auth';
import { LoginPage } from './../pages/login/login';
import { AuthGuardProvider } from '../providers/auth-guard/auth-guard';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavoritesPage,
    ProfilePage,
    LogoutPage,
    MenuPage,
    TabsPage,
    SuggestionPage,
    CommunityPage,LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritesPage,
    ProfilePage,
    LogoutPage,
    MenuPage,
    TabsPage,
    SuggestionPage,CommunityPage,LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthProvider,
    AuthGuardProvider
    
  ]
})
export class AppModule {}
