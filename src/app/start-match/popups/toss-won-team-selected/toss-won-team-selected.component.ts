import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-toss-won-team-selected',
  templateUrl: './toss-won-team-selected.component.html',
  styleUrls: ['./toss-won-team-selected.component.scss'],
})
export class TossWonTeamSelectedComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  async selected(playType: string) {
    this.modalController.dismiss(playType);
  }

}
