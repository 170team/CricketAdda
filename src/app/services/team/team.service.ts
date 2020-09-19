import { TeamMetaDataObj } from './../../Objects/team-metadata-obj';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnRegisterdUser } from 'src/app/player-home/playerObject';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

	constructor(private httpClient:HttpClient) { }

  getTeams():any{
	return this.httpClient.get<any>(environment.server_domain+
    environment.team_api + environment.team_get_teams+
    '?firstResult=0');
  }

  createTeam(team:TeamMetaDataObj):any{
      return this.httpClient.post<TeamMetaDataObj>(environment.server_domain+
        environment.team_api + environment.team_create, team);
    }
}
