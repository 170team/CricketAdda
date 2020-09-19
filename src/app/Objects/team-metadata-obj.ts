import { UnRegisterdUser } from '../player-home/playerObject';

export interface TeamMetaDataObj {
    id : string;
    teamName : string;
    totalNoOfPlayers : number;
    rating :100;
    unRegisterdUser:UnRegisterdUser[];
}