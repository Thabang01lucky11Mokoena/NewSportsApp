import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { View5Page } from '../view5/view5';

/**
 * Generated class for the IceHockeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ice-hockey',
  templateUrl: 'ice-hockey.html',
})
export class IceHockeyPage {

  img;
  arr = [];
  article1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private news: NewsProvider,public modalCtrl: ModalController) {
    this.news.getIceHockey("").then((data: any) => {
      console.log(data);


      this.img = data.articles[1].urlToImage;
      console.log(this.img);


      for (var i = 0; i <= 5; i++) {
        this.arr.push(data.articles[i]);
        console.log(this.article1);
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IceHockeyPage');
  }
  presentModal(a) {
    const modal = this.modalCtrl.create(View5Page,{indx:a});
    console.log(a);
    modal.present();
  }

}
