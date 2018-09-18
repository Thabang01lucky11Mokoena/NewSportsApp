import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  next(){
    this.navCtrl.push(CategoryPage)
  }
}
