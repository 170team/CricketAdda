import { Component, OnInit } from '@angular/core';
import { Player } from '../../../Objects/Player';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-caught-popup',
  templateUrl: './caught-popup.component.html',
  styleUrls: ['./caught-popup.component.scss'],
})
export class CaughtPopupComponent implements OnInit {
  private players: Player[] = [
    {
      name: "Gunathilaka",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    },
    {
      name: "fernando",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    },
    {
      name: "perera",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    },
    {
      name: "fernando",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    },
    {
      name: "mathews",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    },
    {
      name: "de silva",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    },
    {
      name: "shanaka",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    },
    {
      name: "hasaranga",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    },
    {
      name: "sandakan",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    },
    {
      name: "malinga",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    },
    {
      name: "kumara",
      picURL: null,
      strikeRate: "130%",
      maxScore: "56",
      innings: "23",
      runs: "300"
    }
  ];

  constructor(
    private modal: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() { }

  async caughtBy(player: Player) {
    const selectedPlayer: Player = player;
    await this.modal.dismiss(selectedPlayer);
  }

}
