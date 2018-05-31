import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetPage } from '../pages/reset/reset';
import { ProfilePage } from '../pages/profile/profile'
import { ExplorePage } from '../pages/explore/explore';
import { AccountPage } from '../pages/account/account';
import { BrowsePage } from '../pages/browse/browse';
import { TabsPage } from '../pages/tabs/tabs';
import { CharityPage } from '../pages/charity_page/charity_page';
import { DonatePage } from '../pages/donate/donate';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPage,
    ProfilePage,
    ExplorePage,
    AccountPage,
    BrowsePage,
    TabsPage,
    CharityPage,
    DonatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ResetPage,
    ProfilePage,
    ExplorePage,
    AccountPage,
    BrowsePage,
    TabsPage,
    CharityPage,
    DonatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
