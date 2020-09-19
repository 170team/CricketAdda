import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Batsman } from '../Objects/Batsman';
import { WicketConfirmPopupComponent } from './popups/wicket-confirm-popup/wicket-confirm-popup.component';
import { YetToBatPopupComponent } from './popups/yet-to-bat-popup/yet-to-bat-popup.component';
import { NewBatsmanStrickSelectionPopupComponent } from './popups/new-batsman-strick-selection-popup/new-batsman-strick-selection-popup.component';
import { CaughtPopupComponent } from './popups/caught-popup/caught-popup.component';
import { RunOutComponent } from './popups/run-out/run-out.component';
import { ExtrasComponent } from './popups/extras/extras.component';
import { MoreRunsComponent } from './popups/more-runs/more-runs.component';
import { NextBowlerSelectionComponent } from './popups/next-bowler-selection/next-bowler-selection.component';
import { WebsocketService } from '../config/websocket.service';

@Component({
  selector: 'app-live-match',
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.scss'],
})
export class LiveMatchComponent implements OnInit {

  wicketCount: number = 0;
  isWicketDown: boolean = false;
  addBatsman: boolean;
  lastOutBatsman = {} as Batsman;
  dataReturned: any;
  private teamScore: number = 0;
  private batsmansScore: Batsman[];
  private batsman1 = {} as Batsman;
  private batsman2 = {} as Batsman;
  private lastOver: string[] = [];
  private presentOver: string[] = [];
  private presentOverBallCount: number = 0;
  private presentBowler: string = 'malinga';
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  websocketService:WebsocketService;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public modal: ModalController,websocketService:WebsocketService) {
	  this.websocketService=websocketService;
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
	this.websocketService._connect();
    this.batsman1.batsmanName = 'Rahul';
    this.batsman2.batsmanName = 'Dhawan';
    this.batsman1.batsmanScore = 0;
    this.batsman1.batsmanBalls = 0;
    this.batsman2.batsmanScore = 0;
    this.batsman2.batsmanBalls = 0;
    this.batsman1.batting = true;
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  runs(run: number, change: boolean) {
    console.log("last over ", this.presentOver);
    this.presentOverBallCount++;
    if (run == -1) {
      this.wicketClick();
    } else {
      this.presentOver.push(run.toString());
      this.teamScore = this.teamScore + run;
      this.batmansScore(run, change, false);
      this.ballCount();
    }
  }

  ballCount() {
    if (this.presentOverBallCount == 6) {
      this.batmansScore(0, true, true);
      this.presentOverBallCount = 0;
      this.lastOver = this.presentOver;
      this.presentOver = [];
      this.nextBowlerSelection();
    }
  }

  batmansScore(run: number, change: boolean, extras: boolean) {
  	var object ={
		  "run":run,
		  "batsmanId":1234
	  };
	this.websocketService._send(object);
    if (this.batsman1.batting) {
      if (change) {
        this.batsman1.batsmanScore = this.batsman1.batsmanScore + run;
        if (!extras) {
          this.batsman1.batsmanBalls = this.batsman1.batsmanBalls + 1;
        }
        this.batsman1.batting = false;
        this.batsman2.batting = true;
      } else if (!change) {
        this.batsman1.batsmanScore = this.batsman1.batsmanScore + run;
        if (!extras) {
          this.batsman1.batsmanBalls = this.batsman1.batsmanBalls + 1;
        }
      }
    } else if (this.batsman2.batting) {
      if (change) {
        this.batsman2.batsmanScore = this.batsman2.batsmanScore + run;
        if (!extras) {
          this.batsman2.batsmanBalls = this.batsman2.batsmanBalls + 1;
        }
        this.batsman2.batting = false;
        this.batsman1.batting = true;
      } else if (!change) {
        this.batsman2.batsmanScore = this.batsman2.batsmanScore + run;
        if (!extras) {
          this.batsman2.batsmanBalls = this.batsman2.batsmanBalls + 1;
        }
      }
    }
  }

  async wicketClick() {
    let strictbatsman = this.strickingBatsman();
    this.lastOutBatsman.batsmanName = strictbatsman.batsmanName;
    this.lastOutBatsman.batsmanBalls = strictbatsman.batsmanBalls;
    this.lastOutBatsman.batsmanScore = strictbatsman.batsmanScore;
    const modal = await this.modal.create({
      component: WicketConfirmPopupComponent,
      componentProps: { strictbatsman: strictbatsman }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        if (dataReturned.data) {
          this.isWicketDown = true;
          this.wicketCount++;
        }
        console.log('Modal Sent Data :', dataReturned.data);
      }
      if (dataReturned.data) {

        // this.isWicketDown = true;
        // if(this.isWicketDown) {
        this.presentOver.push("W");
        // } 
        if (this.batsman1.batting) {
          this.batsman1.batsmanName = this.batsman2.batsmanName;
          this.batsman1.batsmanScore = this.batsman2.batsmanScore;
          this.batsman1.batsmanBalls = this.batsman2.batsmanBalls;
          this.batsman1.batting = this.batsman2.batting;
          this.addBatsman = true;
        } else if (this.batsman2.batting) {
          console.log("else if condition");
          this.addBatsman = true;
          //this.batsman2 = null;
        }
      }
      if (dataReturned.data == 'caught-page-cricAdda') {
        this.outType('CAUGHT BY', 0, this.lastOutBatsman);
      } else if (dataReturned.data == 'runout-page-cricAdda') {
        this.runInRunOut('RUN OUT BY', this.lastOutBatsman);
      }
      this.ballCount();
    });
    return await modal.present();
  }

  strickingBatsman() {
    let strictbatsman = this.batsman1.batting ? this.batsman1 : this.batsman2;
    return strictbatsman;
  }

  async newBatsmanPopUp() {
    const modal = await this.modal.create({
      component: YetToBatPopupComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        debugger;
        this.batsman2.batsmanName = dataReturned.data.name;
        this.batsman2.batsmanScore = 0;
        this.batsman2.batsmanBalls = 0;
        console.log('Modal Sent Data :', dataReturned.data);
        this.addBatsman = false;
        this.newBastmanStrickingSelectionPopUp()
      }
    });
    return await modal.present();
  }

  async newBastmanStrickingSelectionPopUp() {
    const modal = await this.modal.create({
      component: NewBatsmanStrickSelectionPopupComponent,
      componentProps: { newBatsmanName: this.batsman2.batsmanName }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log("hellooooo : " + dataReturned.data);
        debugger;
        if (dataReturned.data) {
          this.batsman2.batting = true;
          this.batsman1.batting = false;
        } else {
          this.batsman2.batting = false;
          this.batsman1.batting = true;
        }
      }
    });
    return await modal.present();
  }

  async outType(outType: string, runs: number, outBatsman: Batsman) {
    let strictbatsman = outBatsman;
    const modal = await this.modal.create({
      component: CaughtPopupComponent,
      componentProps: {
        strictbatsman: strictbatsman,
        outType: outType,
        runs: runs
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log("hellooooo : " + dataReturned.data);
      }
    });
    return await modal.present();
  }

  async runInRunOut(outType: string, outBatsman: Batsman) {
    let strictbatsman = outBatsman;
    const modal = await this.modal.create({
      component: RunOutComponent,
      componentProps: {
        strictbatsman: strictbatsman,
        outType: outType
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        let run = dataReturned.data;
        console.log("hellooooo : " + dataReturned.data);
        this.teamScore = this.teamScore + parseInt(run);
        // this.batmansScore(dataReturned.data,false,true);
        this.outType(outType, dataReturned.data, outBatsman);
      }
    });
    return await modal.present();
  }

  async extras() {
    const modal = await this.modal.create({
      component: ExtrasComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data != undefined) {
        this.presentOver.push(dataReturned.data.runs);
        if(dataReturned.data.isBallCount) {
          this.presentOverBallCount++;
          this.batmansScore(0, dataReturned.data.change, false);
          this.teamScore = this.teamScore + dataReturned.data.runsWithoutExtras;
          this.ballCount();
        } else {
          this.batmansScore(0, dataReturned.data.change, true);
          this.teamScore = this.teamScore + dataReturned.data.runsWithoutExtras + 1;
        }
        console.log('Modal Sent Data :', dataReturned.data);
      }
    });
    return await modal.present();
  }

  async moreRuns() {
    const modal = await this.modal.create({
      component: MoreRunsComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data.runs != undefined) {
        let runs = dataReturned.data.runs;
        this.runs(parseInt(runs), dataReturned.data.change);
        console.log('Modal Sent Data :', dataReturned.data);
      }
    });
    return await modal.present();
  }

  async nextBowlerSelection() {
    const modal = await this.modal.create({
      component: NextBowlerSelectionComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.presentBowler = dataReturned.data.name;
        console.log('Modal Sent Data :', dataReturned.data);
      }
    });
    return await modal.present();
  }
}


