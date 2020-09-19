import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WicketConfirmPopupComponent } from './live-match/popups/wicket-confirm-popup/wicket-confirm-popup.component';
import { YetToBatPopupComponent } from './live-match/popups/yet-to-bat-popup/yet-to-bat-popup.component';
import { NewBatsmanStrickSelectionPopupComponent } from './live-match/popups/new-batsman-strick-selection-popup/new-batsman-strick-selection-popup.component';
import { RunOutComponent } from './live-match/popups/run-out/run-out.component';
import { CaughtPopupComponent } from './live-match/popups/caught-popup/caught-popup.component';
import { TeamsPage } from './teams/teams.page';
import { CreateTeamComponent } from './teams/create-team/create-team.component';
import { SelectPlayersComponent } from './teams/select-players/select-players.component';
import { StartMatchPage } from './start-match/start-match.page';
import { StartMatchPageModule } from './start-match/start-match.module';
import { TossComponent } from './start-match/popups/toss/toss.component';
import { ExtrasComponent } from './live-match/popups/extras/extras.component';
import { MoreRunsComponent } from './live-match/popups/more-runs/more-runs.component';
import { NextBowlerSelectionComponent } from './live-match/popups/next-bowler-selection/next-bowler-selection.component';
import { TossWonTeamSelectedComponent } from './start-match/popups/toss-won-team-selected/toss-won-team-selected.component';
import { PrepareForMatchComponent } from './start-match/popups/prepare-for-match/prepare-for-match.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpInterceptorServiceService } from './services/http-interceptor-service.service';
import { UnreguserService } from './services/unreguser/unreguser.service';


@NgModule({
  declarations: [
    AppComponent,
    WicketConfirmPopupComponent,
    YetToBatPopupComponent, 
    NewBatsmanStrickSelectionPopupComponent,
    RunOutComponent,
    CaughtPopupComponent,
    TeamsPage,
    CreateTeamComponent,
    SelectPlayersComponent,
    TossComponent,
    ExtrasComponent,
    MoreRunsComponent,
    NextBowlerSelectionComponent,
    TossWonTeamSelectedComponent,
    PrepareForMatchComponent
  ],
  entryComponents: [
    WicketConfirmPopupComponent, 
    YetToBatPopupComponent, 
    NewBatsmanStrickSelectionPopupComponent,
    RunOutComponent,
    CaughtPopupComponent,
    TeamsPage,
    CreateTeamComponent,
    SelectPlayersComponent,
    TossComponent,
    ExtrasComponent,
    MoreRunsComponent,
    NextBowlerSelectionComponent,
    TossWonTeamSelectedComponent,
    PrepareForMatchComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
	AppRoutingModule,
	HttpClientModule,
    StartMatchPageModule
  ],
  providers: [
    StatusBar,
	SplashScreen,
	UnreguserService,
	CookieService,
	{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpInterceptorServiceService,
		multi: true,
	  },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
