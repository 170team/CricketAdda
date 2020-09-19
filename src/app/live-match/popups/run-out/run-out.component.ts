import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-run-out',
  templateUrl: './run-out.component.html',
  styleUrls: ['./run-out.component.scss'],
})
export class RunOutComponent implements OnInit {

  constructor(
    private modal : ModalController,
    private navparams : NavParams
  ) { }

  ngOnInit() {}

  async runsTaken(runs : number) {
    const runsL : number = runs;
    console.log("runs" + runs);
    await this.modal.dismiss(runsL);
  }

}
