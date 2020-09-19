import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StartMatchPage } from './start-match.page';
import { MatchService } from '../services/match/match.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorServiceService } from '../services/http-interceptor-service.service';

const routes: Routes = [
  {
    path: '',
    component: StartMatchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[MatchService,
	{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpInterceptorServiceService,
		multi: true,
	  },
	],
  declarations: [StartMatchPage]
})
export class StartMatchPageModule {}
