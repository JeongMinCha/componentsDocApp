import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController } from 'ionic-angular';

@Component({
    templateUrl: 'popovers.html'
})
export class PopoverPage {
    @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
    constructor(public popoverCtrl: PopoverController) {
        
    }

    presentPopover() {
        let popover = this.popoverCtrl.create(PopoverDetailPage, {

        });
        popover.present();
    }
}
