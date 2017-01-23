import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgesPage } from '../pages/badges/badges';

@NgModule({
  declarations: [
    MyApp,
    ActionSheetPage,
    AlertsPage,
    BadgesPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActionSheetPage,
    AlertsPage,
    BadgesPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
