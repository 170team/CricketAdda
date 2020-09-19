import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Player } from '../../../Objects/Player';

@Component({
  selector: 'app-next-bowler-selection',
  templateUrl: './next-bowler-selection.component.html',
  styleUrls: ['./next-bowler-selection.component.scss'],
})
export class NextBowlerSelectionComponent implements OnInit {
  private players : Player[] = [
    {
      name : "Gunathilaka",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "fernando",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "perera",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "fernando",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "mathews",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "de silva",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "shanaka",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "hasaranga",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "sandakan",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "malinga",
      picURL : null,
      strikeRate : "130%",
      maxScore : "56",
      innings : "23",
      runs : "300"
    },
    {
      name : "kumara",
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

  async nextBowler(player : Player) {
    // const selectedPlayer : Player = player;
    await this.modal.dismiss(player);
  }
}
