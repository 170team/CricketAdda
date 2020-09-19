import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

	webSocketEndPoint: string = 'http://localhost:8082/cricupdate';
	ws = new SockJS(this.webSocketEndPoint);
	topic: string = "/topic/greetings";
    stompClient: any;


  constructor() { 


  }

  _connect() {
	console.log("Initialize WebSocket Connection");

	var headers = {
		Authorization : 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0M2NkY2Y3NC0xZjQ5LTQ2YmYtYjBiZS1hZWZhZDkwYjMxOGMiLCJpYXQiOjE1OTA5NDM4MTUsImV4cCI6MTU5MTU0ODYxNX0.UB4t5jU--7I1wa4ZCsQ8qswiZi40-lw4yNnItJurZ8ELSN1uX0uJt7Xgl8sYHpHWUKfSHt6gv-V72m7sws21VQ",
	};
  	//this.stompClient = Stomp.over(ws);
	const _this = this;
	this.ws.onmessage = function(data) {
		console.log(data);
	}
  };

  _disconnect() {
	if (this.stompClient !== null) {
		this.stompClient.disconnect();
	}
	console.log("Disconnected");	
}

// on error, schedule a reconnection attempt
errorCallBack(error) {
	console.log("errorCallBack -> " + error)
	setTimeout(() => {
		this._connect();
	}, 5000);
}

/**
* Send message to sever via web socket
* @param {*} message 
*/
_send(message) {
	console.log("calling logout api via web socket");
	//this.stompClient.send("/app/hello", {}, JSON.stringify(message));
	this.ws.send(message);
}

onMessageReceived(message) {
	console.log("Message Recieved from Server :: " + message);
	console.log(JSON.stringify(message.body));
}

}
