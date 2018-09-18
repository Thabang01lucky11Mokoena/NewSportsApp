import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }
  getNews(cat){
    let apikey ="https://newsapi.org/v2/top-headlines?country=us&category="+cat+"&apiKey=bc89d01e8e0a4102b73f1177296da6f8";
       return new Promise ((resolve, reject) => {
         this.http.get(apikey ).subscribe(data =>{
            resolve(data);
         })
       
       
      });
   
     }
         
  getSoccer(cat){
    let apikey ="https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=f3fda8a4dc7842b096901fad2616dd13";
    return new Promise ((resolve, reject) => {
      this.http.get(apikey ).subscribe(data =>{
         resolve(data);
      })
    
    
   }); 
  }

  getCricket(cat){
    let apikey ="https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=f3fda8a4dc7842b096901fad2616dd13";
    return new Promise ((resolve, reject) => {
      this.http.get(apikey ).subscribe(data =>{
         resolve(data);
      })
    
    
   }); 
  }
  getFootball(cat){
    let apikey ="https://newsapi.org/v2/top-headlines?sources=nfl-news&apiKey=f3fda8a4dc7842b096901fad2616dd13";
    return new Promise ((resolve, reject) => {
      this.http.get(apikey ).subscribe(data =>{
         resolve(data);
      })
    
    
   }); 
  }
  getIceHockey(cat){
    let apikey ="https://newsapi.org/v2/top-headlines?sources=nhl-news&apiKey=f3fda8a4dc7842b096901fad2616dd13";
    return new Promise ((resolve, reject) => {
      this.http.get(apikey ).subscribe(data =>{
         resolve(data);
      })
    
    
   }); 
  }
}
