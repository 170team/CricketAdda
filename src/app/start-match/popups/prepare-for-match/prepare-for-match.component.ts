import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { YetToBatPopupComponent } from '../../../live-match/popups/yet-to-bat-popup/yet-to-bat-popup.component';
import { Player } from '../../../Objects/Player';
import { NextBowlerSelectionComponent } from '../../../live-match/popups/next-bowler-selection/next-bowler-selection.component';
import { OpeningPlayersMatchDetails } from '../../../Objects/opening-players-match-details';

@Component({
  selector: 'app-prepare-for-match',
  templateUrl: './prepare-for-match.component.html',
  styleUrls: ['./prepare-for-match.component.scss'],
})
export class PrepareForMatchComponent implements OnInit {

  private openingBowler: Player = {} as Player;
  private stricker : Player = {} as Player;
  private nonStricker : Player = {} as Player;
  private openingPlayersMatchDetailsV : OpeningPlayersMatchDetails = {} as OpeningPlayersMatchDetails;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {}

  async newBatsmanPopUp(batsManPosition: string) {
    const modal = await this.modalController.create({
      component: YetToBatPopupComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        if(batsManPosition == 'stricker'){
          this.stricker = dataReturned.data; 
        } else if(batsManPosition == 'nonstricker') {
          this.nonStricker = dataReturned.data; 
        }
        console.log('Modal Sent Data :', dataReturned.data);
        console.log('stricker :', this.stricker);
        console.log('non stricker :', this.nonStricker);

      }
    });
    return await modal.present();
  }

  async nextBowlerSelection() {
    const modal = await this.modalController.create({
      component: NextBowlerSelectionComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
       this.openingBowler = dataReturned.data;
        console.log('openingBowler :', dataReturned.data);
      }
    });
    return await modal.present();
  }

  async openingPlayersMatchDetails() {
    this.openingPlayersMatchDetailsV.stricker = this.stricker;
    this.openingPlayersMatchDetailsV.nonStricker = this.nonStricker;
    this.openingPlayersMatchDetailsV.bowler = this.openingBowler;
    this.modalController.dismiss(this.openingPlayersMatchDetailsV);
  }

}
