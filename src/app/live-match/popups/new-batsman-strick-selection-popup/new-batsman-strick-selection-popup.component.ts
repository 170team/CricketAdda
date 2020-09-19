import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-batsman-strick-selection-popup',
  templateUrl: './new-batsman-strick-selection-popup.component.html',
  styleUrls: ['./new-batsman-strick-selection-popup.component.scss'],
})
export class NewBatsmanStrickSelectionPopupComponent implements OnInit {

  constructor(
    private modalController : ModalController,
    private navParams : NavParams
  ) { }

  ngOnInit() {}

  async strickSelection(isStrike: boolean) {
      const onClosedData: boolean = isStrike;
      await this.modalController.dismiss(onClosedData);
  }

}
