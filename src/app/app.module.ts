import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InfoPage } from '../pages/info/info';
import { TeamsPage } from '../pages/teams/teams';
import { NullPage } from '../pages/null/null';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBxafDl5sKDcNDqouUH_u-FJKCwpIOV22U",
  authDomain: "scouting-chezy-2018.firebaseapp.com",
  databaseURL: "https://scouting-chezy-2018.firebaseio.com",
  projectId: "scouting-chezy-2018",
  storageBucket: "scouting-chezy-2018.appspot.com",
  messagingSenderId: "213321699153"
};

@NgModule({
  declarations: [
    MyApp,
    InfoPage,
    TeamsPage,
    NullPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoPage,
    TeamsPage,
    NullPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
