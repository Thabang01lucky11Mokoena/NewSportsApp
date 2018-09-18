import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the View4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view4',
  templateUrl: 'view4.html',
})
export class View4Page {

img;
article1;
arr=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private news: NewsProvider,public viewCtrl: ViewController) {
    this.news.getFootball("").then((data:any) => {
      console.log(data);
    
      this.img =data.articles[1].urlToImage;
      console.log(this.img);  
  
      for(var i =this.navParams.get("indx");i <=this.navParams.get("indx") ;i++){
      
        this.arr.push(data.articles[i]);
        console.log(this.article1);
      }
   
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad View4Page');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
