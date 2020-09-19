import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path : 'live-match',
        children : [
          {
            path : '',
            loadChildren : '../live-match/live-match.module#LiveMatchModule'
          }
        ]
      },
      {
        path : 'scorecard',
        children : [
          {
            path : '',
            loadChildren : '../scorecard/scorecard.module#ScorecardPageModule'
          }
        ]
      },
      {
        path : '',
        redirectTo : 'tabs/live-match',
        pathMatch : 'full'
      }
    ]
  },
  {
    path : '',
    redirectTo : 'tabs/live-match',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
