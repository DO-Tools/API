import { PlayerManager } from "../player/PlayerManager.js";

export interface PlayerManagerHolder {
    manage(playerId: number): PlayerManager;
}

export interface SquadHolder {
    movePlayerToFirstTeam(playerId: number): Promise<void>;
    movePlayerToYouthTeam(playerId: number): Promise<void>;
    movePlayersToFirstTeam(playerIds: number[]): Promise<void[]>;
    movePlayersToYouthTeam(playerIds: number[]): Promise<void[]>;
}

export interface DO {
    SquadManager: SquadHolder;
    PlayerManager: PlayerManagerHolder;
}