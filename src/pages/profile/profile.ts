import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    name: string;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.name = this.navParams.get('email');

    }

    navigateToHome() {
        this.navCtrl.push(HomePage)
    }

}
