import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiGlobal } from '../../models/api-global.model';
import { ApiService } from '../../services/api.service';
import { CodePage } from '../code/code';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html'
})
export class PhonePage {
  phone: string;
  news: ApiGlobal;

  constructor(public navCtrl: NavController, private apiService: ApiService,  public authServiceProvider: AuthServiceProvider) {

  }
        private insertCode() {
          if (this.phone != undefined && this.phone != " ") {
          this.navCtrl.push(CodePage, {phone: this.phone});
          let logRes = this.authServiceProvider.postData({}, 'send/' + this.phone);
        }
      }

}