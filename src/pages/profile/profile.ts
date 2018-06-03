import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    name: string;


    constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public toastCtrl: ToastController) {
        this.name = this.navParams.get('email');

    }

    navigateToHome() {
        this.app.getRootNav().setRoot(HomePage);
    }

    saveChanges() {
        let toast = this.toastCtrl.create({
            message: 'Changes saved!',
            duration: 3000
          });
          toast.present();
    }

}
