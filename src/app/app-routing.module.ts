import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'player-home',
    loadChildren: () => import('./player-home/player.module').then(m => m.PlayerPageModule)
  },
  {
    path: 'live-match',
    loadChildren: () => import('./live-match/live-match.module').then(m => m.LiveMatchModule)
  },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'scorecard', loadChildren: './scorecard/scorecard.module#ScorecardPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'start-match', loadChildren: './start-match/start-match.module#StartMatchPageModule' },
  { path: 'teams', loadChildren: './teams/teams.module#TeamsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
