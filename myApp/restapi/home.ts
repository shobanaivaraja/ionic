import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Headers} from '@angular/http';
 import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

rest:any;

  constructor(public navCtrl: NavController, public http:Http) {
  
  }
  
  loaduser(){
  	this.http.get("https://restcountries.eu/rest/v2/name/eesti")
  	.map(res => res.json()).subscribe(res =>{
  		this.rest=res;
  		console.log("data:"+JSON.stringify(this.rest[0]));


  	},
  	err =>{
  		console.log("response:"+JSON.stringify(err));
  	})
  }
}
