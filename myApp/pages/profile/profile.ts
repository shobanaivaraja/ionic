import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from '../list/list'
import {Http,Headers, ResponseOptions, Response} from '@angular/http'
 import 'rxjs/add/operator/map'; 

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  Next(){
   this.navCtrl.push(ListPage);
  }
}


