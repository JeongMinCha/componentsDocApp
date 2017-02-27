import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController } from 'ionic-angular';

@Component({
    templateUrl: 'popovers.html'
})
export class PopoverPage {
    @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
    constructor(public popoverCtrl: PopoverController) {
        
    }

    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create(PopoverDetailPage, {
            
        });
        popover.present({ ev: myEvent });
    }
}

@Component({
    template:
    `<ion-list no-lines>
        <button ion-item detail-none>
            +
        </button>
        <button ion-item detail-none>
            -
        </button>
    </ion-list>`
})
export class PopoverDetailPage {
    
}