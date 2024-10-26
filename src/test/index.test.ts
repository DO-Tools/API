import assert from "node:assert/strict";
import {
    describe,
    it,
} from "node:test";

import DO from "../main/index.js";

describe("Package exposed API", () => {
    it("DO should not be null", () => {
        assert.notEqual(DO, null);
    });

    it("DO.PlayerManager should not be null", () => {
        assert.notEqual(DO.PlayerManager, null);
    });

    it("DO.Squad should not be null", () => {
        assert.notEqual(DO.SquadManager, null);
    });
});
