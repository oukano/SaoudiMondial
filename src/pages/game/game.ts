import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  games : any;
  gamesO: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams  ,  public httpClient: HttpClient)  {

    this.gamesO = this.httpClient.get('http://worldcup.samoox.com/');
    this.gamesO
    .subscribe(data => {

        this.games=data.games
        console.log(data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
