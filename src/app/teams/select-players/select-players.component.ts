import { Component, OnInit } from '@angular/core';
import { SelectPlayerObj } from '../../Objects/select-player-obj';
import { ModalController } from '@ionic/angular';
import { UnreguserService } from 'src/app/services/unreguser/unreguser.service';
import { UnRegisterdUser } from 'src/app/player-home/playerObject';

@Component({
  selector: 'app-select-players',
  templateUrl: './select-players.component.html',
  styleUrls: ['./select-players.component.scss'],
})
export class SelectPlayersComponent implements OnInit {

  private playersSelected : UnRegisterdUser[] = [];
  private players =[];
  constructor(
    private modalController : ModalController , private unregService:UnreguserService
  ) { }

  ngOnInit() {

  // have to get reg users also fianlly we have to club both UnRegUsers and RegUsers
  this.unregService.getUsers()
    .subscribe(resp => {
    if(resp.responseCode===200) {
      resp.unRegUsers.forEach(element => {
        this.players.push(element);
      });
    }
   });
  }

  selectedBatsman(i : number) {
    this.players[i].select = !this.players[i].select;
    if(this.players[i].select) {
      this.playersSelected.push(this.players[i]);
    } else if(!this.players[i].select && i !== -1) {
      this.playersSelected.splice(i,1);
    }
  }

  async addSelectedPlayers() {
    const selectedPlayers = this.playersSelected;
    await this.modalController.dismiss(selectedPlayers);

  }

}
