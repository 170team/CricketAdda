import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PlayerHomeComponent } from './player-home.component';
import { AddPlayerComponent } from './add-player/add-player.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild([
        {
          path: '',
          component: PlayerHomeComponent
        },
        {
          path: 'add-player',
          component: AddPlayerComponent
        }
      ])
    ],
    declarations: [
      PlayerHomeComponent,
      AddPlayerComponent
    ]
  })
  export class PlayerPageModule {}