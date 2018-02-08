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
url:String;
data:any;

  constructor(public navCtrl: NavController, public http:Http) {
  
  }
  
  loaduser(){
  	this.http.get("/assets/data/frnd.json")
  	.map(res => res.json())
  	.subscribe(data =>
  	{
  		this.data=data.result;
  		console.log(data.result);


  	},
  	err =>{
  		console.log(err);
  	})
  }
}
