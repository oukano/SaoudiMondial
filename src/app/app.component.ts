import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree ,AdMobFreeBannerConfig} from '@ionic-native/admob-free';


import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { LineUpPage } from '../pages/line-up/line-up';
import { InfosPage } from '../pages/infos/infos';
import { PicsPage } from '../pages/pics/pics';
import { DonatePage } from '../pages/donate/donate';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private admobFree: AdMobFree) {
    this.initializeApp();
    platform.ready().then(() => {
     
      const bannerConfig: AdMobFreeBannerConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        
        isTesting: false,
        autoShow: true
       };
       this.admobFree.banner.config(bannerConfig);
       
       this.admobFree.banner.prepare()
         .then(() => {
           // banner Ad is ready
           // if we set autoShow to false, then we will need to call the show method here
         })
         .catch(e => console.log(e));


      

    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'الرئيسية', component: HomePage },
      { title: 'المباريات', component: GamePage },
      { title: 'التشكيلة', component: LineUpPage },
      { title: 'معلومات', component: InfosPage },
      { title: 'صور', component: PicsPage },
      { title: 'Donate', component: DonatePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
