import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-bpdy',
  templateUrl: 'bpdy.html',
})
export class BpdyPage {

  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data= this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BpdyPage');
  }



}
