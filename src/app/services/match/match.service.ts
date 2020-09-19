import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatchDetails } from 'src/app/Objects/match-details';
import { MatchStatusChange } from 'src/app/Objects/MatchStatusChange';
import { MatchRequest } from 'src/app/requestobjects/match-request';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private httpClient:HttpClient) { }

  statusChange(matchStatus: MatchStatusChange): Observable<MatchStatusChange> {
	return this.httpClient.post<MatchStatusChange>(environment.server_domain+
		environment.match_status, matchStatus);
  }


  createMatch(matchRequest: MatchRequest): Observable<MatchRequest> {
	return this.httpClient.post<MatchRequest>(environment.server_domain+
		environment.match_create, matchRequest);
  }

}
