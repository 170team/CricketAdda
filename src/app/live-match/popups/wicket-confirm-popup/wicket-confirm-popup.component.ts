import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Batsman } from '../../../Objects/Batsman';

@Component({
  selector: 'app-wicket-confirm-popup',
  templateUrl: './wicket-confirm-popup.component.html',
  styleUrls: ['./wicket-confirm-popup.component.scss'],
})
export class WicketConfirmPopupComponent implements OnInit {

private strictbatsman:Batsman;

 constructor(
  private modalController: ModalController,
  private navParams: NavParams
) { }

ngOnInit() {
  console.log('UserId', this.navParams.get('strictbatsman'));
  console.table(this.navParams);
    this.strictbatsman = this.navParams.data.strictbatsman;
}

async closeModal(isOut: boolean) {
  await this.modalController.dismiss(isOut);
}

}
