import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular'
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ResetPage } from '../reset/reset';
import { TabsPage } from '../tabs/tabs';
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    public email: string;
    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams) {
        this.email = "Jane.Doe@email.com"
    }

    navigateHome() {
        this.navCtrl.push(HomePage)
    }

    navigateToReset() {
        this.navCtrl.push(ResetPage)
    }

    navigateToTabs() {
        this.navCtrl.push(TabsPage)
    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Logging you in. Please wait...",
            duration: 500
        });
        loader.present();
        this.navigateToTabs();
    }
}
