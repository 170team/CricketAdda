import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnRegisterdUser } from 'src/app/player-home/playerObject';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnreguserService {

  constructor(private httpClient:HttpClient) { }

  createUnRegUser(unRegisterdUser: UnRegisterdUser): Observable<any> {
	return this.httpClient.post<any>(environment.server_domain+
	environment.unreguser_api + environment.unreguser_create, unRegisterdUser);
  }

  getUsers():any{

	return this.httpClient.get<any>(environment.server_domain+
		environment.unreguser_api + environment.unreguser_getusers+"?firstResult="+0);
  }

}


