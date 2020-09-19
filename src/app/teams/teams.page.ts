import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TeamDetails } from '../Objects/TeamDetails';
import { CreateTeamComponent } from './create-team/create-team.component';
import { TeamMetaDataObj } from '../Objects/team-metadata-obj';
import { TeamService } from '../services/team/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

	constructor(
		private modalController : ModalController ,
		private teamService:TeamService,
	  ) { }
	
	  ngOnInit() {
		this.getAllTeams();
	  }

	  
  private teamMetaDataObj : TeamMetaDataObj;  	
  private teamList : TeamDetails[]=[];


  getAllTeams(){
	this.teamService.getTeams()
    .subscribe(resp => {
		if(resp.responseCode===200) {
      if(resp.totalTeamList.length>0){
        this.teamList=[];
        this.teamList.push(...resp.totalTeamList);
      }
		}
	});
  }


  async closeModal(id:string, teamName:string) {
    const team : TeamDetails = {id: id, teamName: teamName};
    await this.modalController.dismiss(team);
  }

  async createTeamPopup() {
    
    const modal = await this.modalController.create({
      component : CreateTeamComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if(dataReturned !== null) {
        let teamDetail : TeamDetails = {} as TeamDetails;
        teamDetail.id = dataReturned.data.id;
        teamDetail.teamName = dataReturned.data.teamName;
        console.log("team Details !!!! " , teamDetail );
        this.teamList.push(teamDetail);
        console.log("datareturned ", dataReturned);
        // debugger;
        // this.batsman2.batsmanName = dataReturned.data.name;
        // this.batsman2.batsmanScore = 0;
        // this.batsman2.batsmanBalls = 0;
        // console.log('Modal Sent Data :', dataReturned.data);
        // this.addBatsman = false;
        // this.newBastmanStrickingSelectionPopUp()
      }
    });
    return await modal.present();
  }
}
