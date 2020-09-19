import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TeamDetails } from '../../../Objects/TeamDetails';

@Component({
  selector: 'app-toss',
  templateUrl: './toss.component.html',
  styleUrls: ['./toss.component.scss'],
})
export class TossComponent implements OnInit {

  constructor(
    private modalController:ModalController,
    private navParams:NavParams
  ) { }

  ngOnInit() {}

  async tossWonBy(tossWonTeam: TeamDetails) {
    this.modalController.dismiss(tossWonTeam);
  }

}
