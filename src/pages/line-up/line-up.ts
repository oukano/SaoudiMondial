import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-line-up',
  templateUrl: 'line-up.html',
})
export class LineUpPage {

  lineUp : any;
  goalkeeper : any;
  defense : any;
  middle : any;
  attak : any;
  nameA : any;
  lineUpO: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams ,  public httpClient: HttpClient) {

    this.lineUpO = this.httpClient.get('http://worldcup.samoox.com/');
    this.lineUpO
    .subscribe(data => {

        this.lineUp=data.lineUp;
        this.goalkeeper=data.lineUp.goalkeeper;
        this.defense=data.lineUp.defense;
        this.middle=data.lineUp.middle;
        this.attak=data.lineUp.attak;
        console.log(data.lineUp.coach.nameA );
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineUpPage');
  }

}
