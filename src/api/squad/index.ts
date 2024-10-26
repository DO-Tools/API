import PlayerManager from "../player/PlayerManager";


const movePlayerToFirstTeam = async (playerId: number) => {
    return await PlayerManager.manage(playerId).moveToFirstTeam();
};

const movePlayersToFirstTeam = async(playerIds: number[]) => {
    return await Promise.all(playerIds.map(player => movePlayerToFirstTeam(player)));
}

const movePlayerToYouthTeam = async (playerId: number) => {
    return await PlayerManager.manage(playerId).moveToYouthTeam();
};

const movePlayersToYouthTeam = async(playerIds: number[]) => {
    return await Promise.all(playerIds.map(player => movePlayerToYouthTeam(player)));
};

export default {
    movePlayerToFirstTeam,
    movePlayerToYouthTeam,
    movePlayersToFirstTeam,
    movePlayersToYouthTeam,
};