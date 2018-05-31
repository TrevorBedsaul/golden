import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ExplorePage } from '../explore/explore';
import { ProfilePage } from '../profile/profile';
import { BrowsePage } from '../browse/browse';
import { AccountPage } from '../account/account';
@Component({
    selector: 'page-tabs',
    template: `
    <ion-tabs>
      <ion-tab tabIcon="compass" tabTitle="Explore" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="folder-open" tabTitle="Browse" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="paper" tabTitle="Account Info" [root]="tab3"></ion-tab>
      <ion-tab tabIcon="person" tabTitle="Profile" [root]="tab4"></ion-tab>
    </ion-tabs>`
})
export class TabsPage {

    tab1: any;
    tab2: any;
    tab3: any;
    tab4: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.tab1 = ExplorePage;
        this.tab2 = BrowsePage;
        this.tab3 = AccountPage;
        this.tab4 = ProfilePage;
    }

}
