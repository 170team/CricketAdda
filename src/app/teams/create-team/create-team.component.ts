import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectPlayersComponent } from '../select-players/select-players.component';
import { SelectPlayerObj } from '../../Objects/select-player-obj';
import { TeamMetaDataObj } from '../../Objects/team-metadata-obj';
import { UnRegisterdUser } from 'src/app/player-home/playerObject';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent implements OnInit {

  selectPlayersArray : UnRegisterdUser[];
  teamMetaDataObj : TeamMetaDataObj = {} as TeamMetaDataObj;
  teamName: string;

  constructor(
    private modalController : ModalController , private teamService : TeamService
  ) { }

  ngOnInit() {}

  async createTeam() {
    if(!this.selectPlayersArray || !this.selectPlayersArray.length){
      return ;
    }
    this.teamMetaDataObj.teamName=this.teamName;
    this.teamMetaDataObj.totalNoOfPlayers = this.selectPlayersArray.length;
    this.teamMetaDataObj.unRegisterdUser =[];
    this.teamMetaDataObj.unRegisterdUser.push(...this.selectPlayersArray);
    await this.callTeamApi();
  }

  callTeamApi() {
    this.teamService.createTeam(this.teamMetaDataObj)
      .subscribe(resp => {
        this.modalController.dismiss(this.teamMetaDataObj);
        return resp;
    });
    }

  selectPlayers() {
    this.selectTeamPlayer();
  }

  async selectTeamPlayer() {
    const modal = await this.modalController.create({
      component : SelectPlayersComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if(dataReturned !== null) {
        this.selectPlayersArray=[];
        this.selectPlayersArray.push(...dataReturned.data);
      }
    });
    return await modal.present();
  }

  

}
