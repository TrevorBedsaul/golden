import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html'
})
export class ResetPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage)
  }


  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Sending Recovery Email...",
      duration: 3000
    });
    loader.present();
  }

}
