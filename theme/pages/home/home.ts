import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiGlobal } from '../../models/api-global.model';
import { ChatPage } from '../chat/chat';
import { PhonePage } from '../phone/phone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private showChat() {
    this.navCtrl.push(ChatPage);
  }

}