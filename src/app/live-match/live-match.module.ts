import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LiveMatchComponent } from './live-match.component';
import { WebsocketService } from '../config/websocket.service';
import { MatchService } from '../services/match/match.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorServiceService } from '../services/http-interceptor-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LiveMatchComponent
      }//,
      // {
      //   path: 'tabs',

      // }
    ])
  ],
  providers:[WebsocketService,MatchService,
	{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpInterceptorServiceService,
		multi: true,
	  }],
  declarations: [LiveMatchComponent]
})
export class LiveMatchModule {}
