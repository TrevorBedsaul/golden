import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { CharityPage } from '../charity_page/charity_page';

@Component({
    selector: 'page-browse',
    templateUrl: 'browse.html'
})
export class BrowsePage {


    public charities: Array<Charity> = [];

    constructor(public navCtrl: NavController) {
        var charity1 = new Charity();
        charity1.id = 1;
        charity1.name = "Relay For Life";
        charity1.mission = "Relay is a team fundraising event where team members take turns walking around a track or designated path. Each event is 6-24 hours in length and each team is asked to have a member on the track at all times to signify that cancer never sleeps. Cancer patients don't stop because they're tired, and for one night, neither do we. Each team sets up a themed campsite at the event and continues their fundraising efforts by collecting donations for food, goods, games, and activities. This money will count towards their overall team fundraising goal.";
        charity1.category = "Cancer";
        charity1.websiteUrl = "http://relayforlife.org";
        charity1.logoUrl = "http://www.relayforlife.org.za/wp-content/themes/relayforlife16/img/Relay-For-Life.svg";
        charity1.imageUrl = "http://www.relayforlife.org.za/wp-content/themes/relayforlife16/img/Relay-For-Life.svg";

        var charity2 = new Charity();
        charity2.id = 2;
        charity2.name = "Habitat For Humanity";
        charity2.mission = "We facilitate the election and formation of a body of community leaders. Through leadership and skills development the leaders are equipped to lead their communities. Through a series of workshops, we help the people of the community to understand their own housing development project.We equip them with essential knowledge ranging from practical home partner information to the role of the stakeholders, to the costs, materials, regulations and basic architecture of their homes.";
        charity2.category = "Housing";
        charity2.websiteUrl = "https://www.habitat.org";
        charity2.logoUrl = "http://austindesign.biz/wp-content/uploads/2017/07/habitat-for-humanity-logo-795x795.jpg";
        charity2.imageUrl = "http://austindesign.biz/wp-content/uploads/2017/07/habitat-for-humanity-logo-795x795.jpg";

        var charity3 = new Charity();
        charity3.id = 3;
        charity3.name = "Unicef";
        charity3.mission = "UNICEF works to improve the policies and services that protect all children. We aim to make the world a safe and inclusive place for children to grow.";
        charity3.category = "Children";
        charity3.websiteUrl = "http://unicef.org";
        charity3.logoUrl = "http://getinthepicture.org/sites/default/files/images/partner/logos/unicef.png";
        charity3.imageUrl = "https://www.unicef.org/sites/default/files/styles/media_banner/public/2018-02/01_HP_UNI158415_Bluewash_WEB.jpg?itok=PU_hg3j5";
        
        this.charities.push(charity1);
        this.charities.push(charity2);
        this.charities.push(charity3);
    }

    navigateToCharity(charity: Charity) {
        this.navCtrl.push(CharityPage, {charity: charity});
    }
}
