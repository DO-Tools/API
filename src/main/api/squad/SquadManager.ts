import PlayerManager, { Squad } from "../player/PlayerManager.js";
import { SquadHolder } from "../public/index.js";


const movePlayerToFirstTeam = async (playerId: number) => {
    return await PlayerManager.manage(playerId).moveTo(Squad.FIRST_TEAM);
};

const movePlayerToYouthTeam = async (playerId: number) => {
    return await PlayerManager.manage(playerId).moveTo(Squad.YOUTH_TEAM);
};

const movePlayersToFirstTeam = async(playerIds: number[]) => {
    return await Promise.all(playerIds.map(player => movePlayerToFirstTeam(player)));
}

const movePlayersToYouthTeam = async(playerIds: number[]) => {
    return await Promise.all(playerIds.map(player => movePlayerToYouthTeam(player)));
};

export default {
    movePlayerToFirstTeam,
    movePlayerToYouthTeam,
    movePlayersToFirstTeam,
    movePlayersToYouthTeam,
} as SquadHolder;
