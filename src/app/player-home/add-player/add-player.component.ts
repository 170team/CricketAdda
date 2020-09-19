import { Component, OnInit } from '@angular/core';
import { UnRegisterdUser } from '../playerObject';
import { UnreguserService } from 'src/app/services/unreguser/unreguser.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
})
export class AddPlayerComponent implements OnInit {

unregUser:UnRegisterdUser = {} as UnRegisterdUser;
players: any=[];

constructor(private unregService:UnreguserService,public toastController: ToastController) { }


 ngOnInit() {
	this.getUnRegUsers();
 }

 emptyTheObject(){
 this.unregUser.userName=null;
 this.unregUser.locationName=null;
 this.unregUser.displayName=null;
}

 saveUnregisteredUsers(unregUser){

	if(this.valid(unregUser)){
	this.unregService.createUnRegUser(unregUser)
    .subscribe(resp => {
		if(resp.responseCode===200) {
			this.getUnRegUsers();
			this.emptyTheObject();
		}
	});

	}
  }

  getUnRegUsers(){
	this.unregService.getUsers()
    .subscribe(resp => {
		if(resp.responseCode===200) {
			this.players=[];
			resp.unRegUsers.forEach(element => {
				this.players.push(element);
			});
		}
	});
  }

  async presentToast(toastMessage:string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 2000
    });
    toast.present();
  }


  valid(unRegUser): boolean {
	if(unRegUser.userName === undefined || unRegUser.userName === null){
		this.presentToast('UserName is Required');
		return false;
	}else if(unRegUser.displayName === undefined || unRegUser.displayName === null){
		this.presentToast('DisplayName is Required');
		return false;
	}else if(unRegUser.locationName === undefined || unRegUser.locationName === null){
		this.presentToast('LocationName is Required');
		return false;
	}
	  return true;
  }
}


