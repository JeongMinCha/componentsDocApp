import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertsPage } from '../pages/alerts/alerts';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { BackgroundImageCardsPage } from '../pages/cards/bg-cards/bg-cards';
import { SocialCardsPage } from '../pages/cards/social-cards/social-cards';
import { DateTimePage } from '../pages/datetime/datetime';
import { FABPage } from '../pages/fab/fab';
import { InputsPage } from '../pages/inputs/inputs';
import { SuccessPage } from '../pages/inputs/success/success';
import { ListsPage } from '../pages/lists/lists';

@NgModule({
  declarations: [
    MyApp,
    ActionSheetPage,
    AlertsPage,
    ButtonsPage,
    CardsPage,
      BackgroundImageCardsPage,
      SocialCardsPage,
    DateTimePage,
    FABPage,
    InputsPage,
      SuccessPage,
    ListsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActionSheetPage,
    AlertsPage,
    ButtonsPage,
    CardsPage,
      BackgroundImageCardsPage,
      SocialCardsPage,
    DateTimePage,
    FABPage,
    InputsPage,
      SuccessPage,
    ListsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
