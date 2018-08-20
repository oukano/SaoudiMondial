import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BpdyPage } from '../bpdy/bpdy';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  news = [];
  newsO: Observable<any>;
  count =0;
  data :any;

  constructor(public navCtrl: NavController ,  public httpClient: HttpClient) {

    this.newsO = this.httpClient.get('http://worldcup.samoox.com/');
    this.newsO
    .subscribe(data => {

      for (let i = 0; i < 2; i++) {
        this.news.push( data.news[i] );
      }

      this.data=data;
      this.count=2
console.log(this.data);
    })

  }

  loadIt(id){

    this.navCtrl.push( BpdyPage , this.data.news[id-1] );

  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      if(this.count<this.data.news.length){
        this.news.push( this.data.news[this.count] );
        this.count++;
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  

}
