import { Component, OnInit } from '@angular/core';
import { Batsman } from '../Objects/Batsman';
import { ModalController, NavParams } from '@ionic/angular';
import { AddPlayerComponent } from '../player-home/add-player/add-player.component';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  dataReturned: any;
  private teamScore: number = 0;
  private batsmansScore : Batsman[];
  private batsman1 = {} as Batsman;
  private batsman2 = {} as Batsman;
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
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public modal: ModalController) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
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

  runs(run:number, change:number) {
    console.log(run);
    this.teamScore = this.teamScore + run;
    this.batmansScore(run, change);
  }

  batmansScore(run:number, change:number) {
    if(this.batsman1.batting) {
      if(change) {
        this.batsman1.batsmanScore = this.batsman1.batsmanScore + run;
        this.batsman1.batsmanBalls = this.batsman1.batsmanBalls + 1; 
        this.batsman1.batting = false;
        this.batsman2.batting = true;
      } else if(!change) {
        this.batsman1.batsmanScore = this.batsman1.batsmanScore + run;
        this.batsman1.batsmanBalls = this.batsman1.batsmanBalls + 1; 
      }
    } else if(this.batsman2.batting) {
      if(change) {
        this.batsman2.batsmanScore = this.batsman2.batsmanScore + run;
        this.batsman2.batsmanBalls = this.batsman2.batsmanBalls + 1; 
        this.batsman2.batting = false;
        this.batsman1.batting = true;
      } else if(!change) {
        this.batsman2.batsmanScore = this.batsman2.batsmanScore + run;
        this.batsman2.batsmanBalls = this.batsman2.batsmanBalls + 1; 
      }
    }
  }

  async openModal() {
    console.log("hi");
    const modal = await this.modal.create({
      component: Profile,
      componentProps: { userId: 8675309 }
    });
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await modal.present();
  }

}

@Component({
  selector: 'profile',
  template: `<p>hello</p>
  <ion-header>
    <ion-toolbar text-center>
      <ion-title>{{modelId}}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-button (click)="closeModal()">Close Modal</ion-button>
  `
}
)
export class Profile {

  private modelId:string;

 constructor(
  private modalController: ModalController,
  private navParams: NavParams
) { }

ngOnInit() {
  console.log('UserId', this.navParams.get('userId'));
  console.table(this.navParams);
    this.modelId = this.navParams.data.userId;
}

async closeModal() {
  const onClosedData: string = "Wrapped Up!";
  await this.modalController.dismiss(onClosedData);
}

}


