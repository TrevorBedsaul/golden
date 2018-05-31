import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular'
import { LoadingController } from 'ionic-angular';
import { Charity } from '../../models/charity';


@Component({
    selector: 'page-donate',
    templateUrl: 'donate.html'
})
export class DonatePage {
    public charity: Charity;
    public amount: number;

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public toastCtrl: ToastController) {
        this.charity = this.navParams.get("charity");
    }

    submittingPayment() {
        let loader = this.loadingCtrl.create({
            content: "Submitting payment...",
            duration: 500
        });
        loader.present();
        this.sendDonation();
    }

    sendDonation() {
        let toast = this.toastCtrl.create({
            message: 'Donation made!',
            duration: 3000
          });
          toast.present();
    }

}
