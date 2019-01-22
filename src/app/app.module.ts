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
  apiKey: "AIzaSyAmukE8omYPSTm0Y7Ex5jZoBuUAnS8CE7o",
  authDomain: "dev-1-2019.firebaseapp.com",
  databaseURL: "https://dev-1-2019.firebaseio.com",
  projectId: "dev-1-2019",
  storageBucket: "dev-1-2019.appspot.com",
  messagingSenderId: "430779624782"
};

/* https://www.joshmorony.com/hosting-an-ionic-pwa-with-firebase-hosting/
  Steps to uploading pit scout to firebase in link
  Never overwrite the index.html file, it will overwrite
  the app to direct to instructions for firebase hosting
*/

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
