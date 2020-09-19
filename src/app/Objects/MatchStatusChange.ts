import { MatchStatus } from './MatchStatus';

export interface MatchStatusChange {
    matchId : string;
    matchStatus:MatchStatus;
}