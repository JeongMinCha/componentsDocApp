import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component({
    templateUrl: 'loading.html'
})
export class LoadingPage {
    constructor(public loadingCtrl: LoadingController) {

    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait...',
            duration: 3000,
        });
        loader.present();
    }

    presentLoadingCircles() {
        let loader = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Please wait...',
            duration: 3000,
        });
        loader.present();
    }

    presentLoadingBubbles() {
        let loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait...',
            duration: 3000,
        });
        loader.present();
    }

    presentLoadingCrescent() {
        let loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please wait...',
            duration: 3000,
        });
        loader.present();
    }
}