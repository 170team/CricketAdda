import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-more-runs',
  templateUrl: './more-runs.component.html',
  styleUrls: ['./more-runs.component.scss'],
})
export class MoreRunsComponent implements OnInit {
  change: boolean;
  secondDisplayClicked: boolean;
  firstDisplayDisabled: boolean = false;
  secondAddDisabled: boolean = true;
  secondDisplayDisable: boolean = true;
  totalResult: string = '';
  runs: number = 0;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  result2(data: string) {
    this.runs = parseInt(data);
    if(this.runs%2 == 0) {
      this.change = false;
    } else {
      this.change = true;
    }
    this.secondAddDisabled = false;
    //this.totalResult = this.runs;
  }

  result5(data: string) {
    this.secondDisplayDisable = false;
    //this.totalResult = this.totalResult + data;
  }

  clearResult() {
    this.totalResult = '';
    this.runs = undefined;
    this.secondAddDisabled = true;
    this.secondDisplayDisable = true;
  }
  result3(data: string) {
    this.runs = this.runs + parseInt(data);
    this.firstDisplayDisabled = false;
    this.secondAddDisabled = true;
    this.secondDisplayDisable = true;
  }

  submit() {
    this.back(this.runs.toString());
  }

  async back(result: string) {
    console.log(result);
    const resultF: string = result;
    const resultObject = {runs : result, change : this.change};
    await this.modalController.dismiss(resultObject);
  }

}
