import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiGlobal } from '../../models/api-global.model';
import { ApiService } from '../../services/api.service';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { PhonePage } from '../phone/phone';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  news: ApiGlobal;
  answer: string;
  messages = [];

  constructor(public navCtrl: NavController, private navParams: NavParams, private apiService: ApiService,  public authServiceProvider: AuthServiceProvider) {
    let logRes = this.authServiceProvider.postData({}, 'talk/fr/12/bonjour');
    this.messages.push([logRes[0], "left"]);
    this.answer = navParams.get('answer');
    
  }

  setMessage() {
    if (this.answer != "" && this.answer != " "){
    this.messages.push([this.answer, "right"]);
    let logRes = this.authServiceProvider.postData({}, 'talk/fr/12/' + this.answer);
    if (this.answer != "annuler")
    this.messages.push([logRes[0], "left"])
    if (this.answer == "oui" && logRes[1].name == "start-followup")
        this.navCtrl.push(PhonePage);
          }
          this.answer = "";

  }

}