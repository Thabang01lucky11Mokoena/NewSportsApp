import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { View1Page } from '../view1/view1';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  sports;
  img;
  arr = [];
  article1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private news: NewsProvider,public modalCtrl: ModalController) {
    this.news.getNews("sports").then((data: any) => {
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
    console.log('ionViewDidLoad NewsPage');
  }
  presentModal(a) {
    const modal = this.modalCtrl.create(View1Page,{indx:a});
    console.log(a);
    modal.present();
  }
}
