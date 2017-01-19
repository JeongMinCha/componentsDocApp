import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'alerts.html',
})
export class AlertsPage {
    constructor(public alertCtrl: AlertController) {
        
    }

    showBasicAlert() {
        let alert = this.alertCtrl.create({
            title: 'Basic Alert!',
            subTitle: 'This is an ui component called a basic alert',
            buttons: ['OK'],
        });
        alert.present();
    }

    showPromptAlert() {
        
    }

    showConfirmationAlert() {

    }

    showRadioAlert() {

    }

    showCheckboxAlert() {
        
    }
}