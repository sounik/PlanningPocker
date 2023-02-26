import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatRadioModule} from '@angular/material/radio';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatChipsModule} from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';

// import { PokerPointComponent } from './Modules/poker-board/Component/poker-point/poker-point.component';
// import { PokerBoardComponent } from './Modules/poker-board/poker-board.component';
// import { SuitComponent } from './Modules/poker-board/Component/suit/suit.component';
// import { UserComponent } from './Shared/user/user.component';
// import { JoinedUserComponent } from './Modules/poker-board/Component/joined-user/joined-user.component';
// import { JoinRoomComponent } from './Shared/join-room/join-room.component';
// import { HomeComponent } from './Modules/home/home.component';

import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
// import { HeaderComponent } from './Modules/header/header.component';
// import { JoinRoomActionComponent } from './Modules/header/components/join-room-action/join-room-action.component';
// import { AuthenticationActionComponent } from './Modules/header/components/authentication-action/authentication-action.component';
// import { BannerComponent } from './Shared/banner/banner.component';
// import { ActionBarComponent } from './Modules/poker-board/Component/action-bar/action-bar.component';
// import { TimerComponent } from './Shared/timer/timer.component';
// import { ReferenceComponent } from './Modules/poker-board/Component/reference/reference.component';
// import { TimerService } from './Shared/timer/service/timer.service';

import {AppComponentModule} from '../app-component/app-component.module'
import { ModulesModule } from 'src/modules/modules.module';


//import 'hammerjs';

// export function MSALInstancefactory(): IPublicClientApplication{
//   return new PublicClientApplication({
//     auth:{
//       clientId : 'beff9b4e-18e7-4ca3-97ee-5c4e1e8d3bd2',
//       redirectUri: 'http://localhost:4200'

//     }
//   })
// }

@NgModule({
  declarations: [
    AppComponent,
    // PokerBoardComponent,
    // PokerPointComponent,
    // SuitComponent,
    // UserComponent,
    // JoinedUserComponent,
    // JoinRoomComponent,
    // HomeComponent,
    // HeaderComponent,
    // JoinRoomActionComponent,
    // AuthenticationActionComponent,
    // BannerComponent,
    // ActionBarComponent,
    // TimerComponent,
    // ReferenceComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    BrowserAnimationsModule,
    AppComponentModule,
    ModulesModule
    // FormsModule,
    // ReactiveFormsModule,
    // MatGridListModule,
    // MatCardModule,
    // MatSidenavModule,
    // MatRadioModule,
    // MatListModule,
    // FlexLayoutModule,
    // MatIconModule,
    // MatToolbarModule,
    // MatChipsModule,
    // MatDialogModule,
    // MatFormFieldModule,
    // MatSlideToggleModule,
    // MatExpansionModule,
    // MatButtonToggleModule,
    
    // MsalModule
  ],
  // providers: [{
  //   provide:MSAL_INSTANCE,
  //   useFactory:MSALInstancefactory
  // },
  // MsalService,
  // TimerService],
  bootstrap: [AppComponent]
  // entryComponents: [
  //   JoinRoomComponent,
  //   ]
})
export class AppModule { }
