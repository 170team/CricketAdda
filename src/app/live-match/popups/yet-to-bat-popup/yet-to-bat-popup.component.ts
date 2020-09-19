import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Player } from '../../../Objects/Player';

@Component({
  selector: 'app-yet-to-bat-popup',
  templateUrl: './yet-to-bat-popup.component.html',
  styleUrls: ['./yet-to-bat-popup.component.scss'],
})
export class YetToBatPopupComponent implements OnInit {

  private players : Player[] = [
    {
      name : "Raghul",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "Dhawan",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "kohli",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "iyer",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "pandey",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "samson",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "sundar",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "Thakur",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "chahal",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "bumrah",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "saini",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    }

  ];
  constructor(
    private modal : ModalController,
    private navParams : NavParams 
  ) { }

  ngOnInit() {}

  async selectedBatsman(player : Player) {
    const selectedPlayer : Player = player;
    await this.modal.dismiss(selectedPlayer);
  }

}
