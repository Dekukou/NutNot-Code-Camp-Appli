import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiGlobal } from '../../models/api-global.model';
import { ApiService } from '../../services/api.service';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-code',
  templateUrl: 'code.html'
})
export class CodePage {

  news: ApiGlobal;
  phone: string;
  code: string;

  constructor(public navCtrl: NavController, private navParams: NavParams,  public authServiceProvider: AuthServiceProvider) {

    this.phone = navParams.get('phone');
    this.code = navParams.get('code');    
  }

  showvalue() {
    let logRes = this.authServiceProvider.postData({}, 'login/' + this.phone + '/' + this.code);
    if (logRes[0] == true){
    this.navCtrl.push(HomePage); 
    }
  }
}