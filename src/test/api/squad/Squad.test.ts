import assert from "node:assert/strict";
import {
    afterEach,
    describe,
    it,
    mock,
} from "node:test";

import Squad from "../../../main/api/squad/SquadManager.js";

const playerId: number = 1_234_567;
const playerIds = [
    1_234_567,
    9_876_543,
];


describe("Squad", () => {
    it("movePlayerToFirstTeam (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => Squad.movePlayerToFirstTeam(playerId));
    });

    it("movePlayerToYouthTeam (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => Squad.movePlayerToYouthTeam(playerId));
    });

    it("movePlayersToFirstTeam (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => Squad.movePlayersToFirstTeam(playerIds));
    });

    it("movePlayersToYouthTeam (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => Squad.movePlayersToYouthTeam(playerIds));
    });

    afterEach(() => {
        mock.restoreAll();
    })
});
