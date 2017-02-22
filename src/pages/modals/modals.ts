import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

class Email {
    address: string;
    body: string;

    constructor(addr, body) {
        this.address = addr;
        this.body = body;
    }
}

@Component({
    templateUrl: 'modals.html',
})
export class ModalPage {
    emails: Array<Email>;

    constructor(public modalCtrl: ModalController) {
        this.emails = [
            { address: "john@gmail.com", body: "I think it was a wonderful vacation. Do you think so?" },
            { address: "jake@gmail.com", body: "Hi" },
            { address: "sarah@gmail.com", body: "What\'s up?" },
        ];
    }

    openModalPage(email) {
        let modal = this.modalCtrl.create(ModalDetailPage);
        modal.present();
    }
}

@Component({
    template: `
    <ion-header>
        <ion-toolbar>
            <ion-title>Detail</ion-title>
            <ion-buttons start>
                <button ion-button (click)="dismiss()">
                    <span ion-text color="primary">Cancel</span>
                </button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <h1>{{address}}</h1>
        <p>{{body}}</p>
    </ion-content>`,
})
class ModalDetailPage {
    address: string;
    body: string;

    constructor(public navParams: NavParams,
                public viewCtrl: ViewController) {
        this.address = this.navParams.get("address");
        this.body = this.navParams.get("body");
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}