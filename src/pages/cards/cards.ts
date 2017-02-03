import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BackgroundImageCardsPage } from './bg-cards/bg-cards';
import { SocialCardsPage } from './social-cards/social-cards';

@Component({
    templateUrl: 'cards.html'
})
export class CardsPage {
    constructor(public navCtrl: NavController) {

    }

    openBackgroundImageCardPage() {
        this.navCtrl.push(BackgroundImageCardsPage);
    }

    openSocialCardPage() {
        this.navCtrl.push(SocialCardsPage);
    }
}