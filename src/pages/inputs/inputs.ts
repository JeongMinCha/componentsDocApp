import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SuccessPage } from './success/success';

@Component({
    templateUrl: 'inputs.html'
})
export class InputsPage {
    username: string = "";
    password: string = "";

    constructor(public navCtrl: NavController) {

    }

    signIn() {
        this.navCtrl.push(SuccessPage, {
            username: this.username,
        });
    }
}