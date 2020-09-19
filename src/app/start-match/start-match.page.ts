import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TeamsPage } from '../teams/teams.page';
import { SelectPlayersComponent } from '../teams/select-players/select-players.component';
import { TeamMetaDataObj } from '../Objects/team-metadata-obj';
import { TeamDetails } from '../Objects/TeamDetails';
import { TossComponent } from './popups/toss/toss.component';
import { TossWonTeamSelectedComponent } from './popups/toss-won-team-selected/toss-won-team-selected.component';
import { PrepareForMatchComponent } from './popups/prepare-for-match/prepare-for-match.component';
import { MatchDetails } from '../Objects/match-details';
import { MatchService } from '../services/match/match.service';
import { MatchStatusChange } from '../Objects/MatchStatusChange';
import { MatchStatus } from '../Objects/MatchStatus';

@Component({
  selector: 'app-start-match',
  templateUrl: './start-match.page.html',
  styleUrls: ['./start-match.page.scss'],
})
export class StartMatchPage implements OnInit {

  
  private isTeamSelected: boolean = false;
  private isTeamASelected:boolean = false;
  private isTeamBSelected:boolean = false;
  private prepareForMatchV:boolean = false;
  private tossWonTeamSelectedType: string = ''; 
  private teamDetailsA: TeamDetails = {} as TeamDetails;
  private teamDetailsB: TeamDetails = {} as TeamDetails;
  private tossWonBy: TeamDetails = {} as TeamDetails;
  private tossLostBy: TeamDetails = {} as TeamDetails;
  private matchDetails : MatchDetails = {} as MatchDetails;
  private matchStatusChange : MatchStatusChange;

  constructor(
	private modalController: ModalController,
	private matchService:MatchService,
	//,
	//private navParams : NavParams,
  ) { }

  ngOnInit() {
  }

  async openTeamsListA(selectedTeam: string) {
    const modal = await this.modalController.create({
      component: TeamsPage,
      componentProps: {
        selectedTeam: selectedTeam
      }
    });

    //teamA selected
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data.id !== undefined) {
        this.teamDetailsA = dataReturned.data;
        this.isTeamASelected = true;
        console.log("datareturned 1", dataReturned);
      }
    });
    return await modal.present();
  }


  async openTeamsListB(selectedTeam: string) {
    const modal = await this.modalController.create({
      component: TeamsPage,
      componentProps: {
        selectedTeam: selectedTeam
      }
    });


//teamb selected
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data.id !== undefined) {
        this.teamDetailsB = dataReturned.data;
        this.isTeamBSelected = true;
        console.log("datareturned 2", dataReturned);
      }
    });
    return await modal.present();
  }

  async tossSelection(selectedTeam: string) {
    const modal = await this.modalController.create({
      component: TossComponent,
      componentProps: {
        teamDetailsA: this.teamDetailsA,
        teamDetailsB: this.teamDetailsB
      }
    });


    // toss returned
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        // this.teamDetailsA = dataReturned.data;
        if (dataReturned.data.id != undefined) {
          this.tossWonBy = dataReturned.data;
          if(this.teamDetailsA.id == dataReturned.data.id) {
            this.tossLostBy = this.teamDetailsB;
          } else if(this.teamDetailsB.id == dataReturned.data.id) {
            this.tossLostBy = this.teamDetailsA;
          }
          this.isTeamSelected = true;
          this.tossWonTeamSelected(this.tossWonBy);
        }
        console.log("toss won by", dataReturned.data);
      }
    });
    return await modal.present();
  }

  async tossWonTeamSelected(tossWonTeam: TeamDetails) {
    const modal = await this.modalController.create({
      component: TossWonTeamSelectedComponent,
      componentProps: {
        tossWonTeam: this.tossWonBy
      }
    });

    //batting
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.tossWonTeamSelectedType = dataReturned.data;
        this.prepareForMatchV = true;
        console.log("team selected", dataReturned.data);
        if(dataReturned.data == 'batting') {
          this.matchDetails.batting = tossWonTeam;
          this.matchDetails.bowling = this.tossLostBy;
        } else if(dataReturned.data == 'bowling') {
          this.matchDetails.batting = this.tossLostBy;
          this.matchDetails.bowling = tossWonTeam;
        }
      }
    });
    return await modal.present();
  }

  reset() {
    this.isTeamSelected = false;
    this.isTeamASelected = false;
    this.isTeamBSelected = false;
    this.tossWonTeamSelectedType = '';
    this.teamDetailsA = {} as TeamDetails;
    this.teamDetailsB = {} as TeamDetails;
    this.tossWonBy = {} as TeamDetails
  }

  async prepareForMatch() {
    const modal = await this.modalController.create({
      component: PrepareForMatchComponent,
      componentProps: {
        matchDetails: this.matchDetails
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log("team selected", dataReturned.data);
      }
    });
    return await modal.present();
  }


createMatch() {
	this.matchService.createMatch(this.matchDetails)
    .subscribe(resp => {
      return this.matchStatusChange;
	});
  }


  startMatch() {
	this.matchStatusChange.matchId="";
	this.matchStatusChange.matchStatus=MatchStatus.STARTED;
	this.matchService.statusChange(this.matchStatusChange)
    .subscribe(resp => {
      return this.matchStatusChange;
    });
  }




}
