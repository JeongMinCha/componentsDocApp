import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

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
        let modal = this.modalCtrl.create();
        modal.present();
    }
}