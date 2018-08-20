import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AdMobFree } from '@ionic-native/admob-free';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { LineUpPage } from '../pages/line-up/line-up';
import { InfosPage } from '../pages/infos/infos';
import { PicsPage } from '../pages/pics/pics';
import { DonatePage } from '../pages/donate/donate';
import { BpdyPage } from '../pages/bpdy/bpdy';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage,
    LineUpPage,
    InfosPage,
    PicsPage,
    DonatePage,
    BpdyPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
    LineUpPage,
    InfosPage,
    PicsPage,
    DonatePage,
    BpdyPage
  ],
  providers: [
    AdMobFree,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
