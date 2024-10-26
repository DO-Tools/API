import assert from "node:assert/strict";
import {
    describe,
    it,
} from "node:test";

import PlayerManager from "../../../main/api/player/PlayerManager.js";

const playerId: number = 1_234_567;

describe("PlayerManager", () => {
    it("should be able to manage a player", async () => {
        const manager = PlayerManager.manage(playerId);
        assert.notStrictEqual(manager, null);
    });
});
