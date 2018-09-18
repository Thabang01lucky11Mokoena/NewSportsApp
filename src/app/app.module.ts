import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsProvider } from '../providers/news/news';
import { HttpClientModule } from '@angular/common/http';
import { View3Page } from '../pages/view3/view3';
import { CricketPage } from '../pages/cricket/cricket';
import { FootballPage } from '../pages/football/football';
import { SoccerPage } from '../pages/soccer/soccer';
import { IceHockeyPage } from '../pages/ice-hockey/ice-hockey';
import { View1Page } from '../pages/view1/view1';
import { View2Page } from '../pages/view2/view2';
import { View4Page } from '../pages/view4/view4';
import { View5Page } from '../pages/view5/view5';
import { NewsPage } from '../pages/news/news';
import { CategoryPage } from '../pages/category/category';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    View3Page,
    CricketPage,
    FootballPage,
    NewsPage,
    SoccerPage,
    IceHockeyPage,
    View1Page,
    View2Page,
    View3Page,
    View4Page,
    View5Page,
    CategoryPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    View3Page,
    CricketPage,
    FootballPage,
    NewsPage,
    SoccerPage,
    IceHockeyPage,
    View1Page,
    View2Page,
    View3Page,
    View4Page,
    View5Page,
    CategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider
  ]
})
export class AppModule {}
