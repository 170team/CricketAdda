import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TeamsPage } from './teams.page';
import { TeamService } from '../services/team/team.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorServiceService } from '../services/http-interceptor-service.service';

const routes: Routes = [
  {
    path: '',
    component: TeamsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	IonicModule,
	HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[TeamService,{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpInterceptorServiceService,
		multi: true,
	  }
],
  declarations: [TeamsPage]
})
export class TeamsPageModule {}
