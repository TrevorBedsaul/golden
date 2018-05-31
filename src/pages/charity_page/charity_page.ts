import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular'
import { LoadingController } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { DonatePage } from '../donate/donate';


@Component({
    selector: 'page-charity_page',
    templateUrl: 'charity_page.html'
})
export class CharityPage {
    public charity: Charity;

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public toastCtrl: ToastController) {
        this.charity = this.navParams.get("charity");
    }

    addingToPortfolio() {
        let loader = this.loadingCtrl.create({
            content: "Adding to porfolio...",
            duration: 500
        });
        loader.present();
        this.addedToPortfolio();
    }

    openingPaymentPortal(charity: Charity) {
        let loader = this.loadingCtrl.create({
            content: "Opening payment portal...",
            duration: 500
        });
        loader.present();
        this.navCtrl.push(DonatePage, {charity: charity});
    }

    addedToPortfolio() {
        let toast = this.toastCtrl.create({
            message: 'Added to your account portfolio!',
            duration: 3000
          });
          toast.present();
    }
}
