import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CricketPage } from '../cricket/cricket';
import { NewsPage } from '../news/news';
import { SoccerPage } from '../soccer/soccer';
import { FootballPage } from '../football/football';
import { IceHockeyPage } from '../ice-hockey/ice-hockey';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  next1(){
    this.navCtrl.push(NewsPage);
  }

  next2(){
    this.navCtrl.push(SoccerPage);
  }

  
  next3(){
    this.navCtrl.push(CricketPage);
  }

  
  next4(){
    this.navCtrl.push(FootballPage);
  }

  
  next5(){
    this.navCtrl.push(IceHockeyPage);
  }
}
