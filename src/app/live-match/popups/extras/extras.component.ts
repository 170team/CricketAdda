import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss'],
})
export class ExtrasComponent implements OnInit {
  plusAdded: boolean = false;
  isBallCount: boolean = false;
  willCreditstoBatsman: boolean = false;
  change: boolean = false;
  extra: string = '';
  addToExtra: string = '';
  addDisable: boolean = true;
  firstDisplayDisabled: boolean = true;
  secondAddDisabled: boolean = true;
  secondDisplayDisable: boolean = true;
  totalResult: string = '';
  runs: number;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  result1(data: string) {
    this.extra = data;
    this.totalResult = '';
    this.runs = undefined;
    this.addDisable = false;
    this.plusAdded = false;
    this.firstDisplayDisabled = true;
    this.secondAddDisabled = true;
    this.secondDisplayDisable = true;
    if (data == 'b' || data == 'lb') {
      this.isBallCount = true;
    }
  }

  result4(data: string) {
    this.plusAdded = true;
    this.addDisable = true;
    this.firstDisplayDisabled = false;
    this.totalResult = data;
    this.runs = 0;
  }

  result2(data: string) {
    this.runs = parseInt(data);
    if (this.runs % 2 == 0) {
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
    this.extra = '';
    this.totalResult = '';
    this.runs = undefined;
    this.addDisable = true;
    this.plusAdded = false;
    this.firstDisplayDisabled = true;
    this.secondAddDisabled = true;
    this.secondDisplayDisable = true;
  }
  result3(data: string) {
    this.runs = this.runs + parseInt(data);
  }

  submit() {
    debugger;
    if(!this.plusAdded) {
      this.back(this.extra);
    } else if(this.plusAdded && this.runs == undefined) {
      this.back(this.extra + this.totalResult + 0);
    } else if(this.plusAdded && this.runs != undefined) {
      this.back(this.extra + this.totalResult + this.runs);
    }
    
  }

  async back(result: string) {
    const resultF: string = result;
    if(this.runs == undefined) {
      this.runs = 0;
    }
    const resultObject = { runs: result, change: this.change, runsWithoutExtras: this.runs, isBallCount: this.isBallCount, willCreditstoBatsman: this.willCreditstoBatsman };
    await this.modalController.dismiss(resultObject);
  }

}
