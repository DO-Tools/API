import assert from "node:assert/strict";
import {
    afterEach,
    describe,
    it,
    mock,
    Mock,
    TestContext,
} from "node:test";

import PlayerManager, { ScoutType, Squad, TransferStatus } from "../../../main/api/player/PlayerManager.js";

const playerId: number = 1_234_567;
const manager = PlayerManager.manage(playerId);

describe("PlayerManagerImpl", () => {
    it("moveTo (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => await manager.moveTo(Squad.FIRST_TEAM));
    });

    it("moveTo (HTTP error)", async (ctx: TestContext) => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: false,
            };
        });
        const spy: Mock<typeof console.error> = ctx.mock.method(console, "error");
        assert.strictEqual(spy.mock.callCount(), 0);

        // when - then
        await assert.doesNotReject(async () => await manager.moveTo(Squad.FIRST_TEAM));
        assert.strictEqual(spy.mock.callCount(), 1);
        assert.strictEqual(spy.mock.calls[0].arguments[0], "PlayerManagerImpl.moveTo request failed for player ID 1234567!");
    });

    it("moveTo (conn. error)", async (ctx: TestContext) => {
        // given
        const COULD_NOT_REACH_SERVER_ERROR = "Could not reach server?";
        mock.method(global, "fetch", async () => {
            throw new Error(COULD_NOT_REACH_SERVER_ERROR);
        });
        const spy: Mock<typeof console.error> = ctx.mock.method(console, "error");
        assert.strictEqual(spy.mock.callCount(), 0);

        // when - then
        await assert.rejects(
            async () => await manager.moveTo(Squad.FIRST_TEAM),
            (e: Error) => {
                assert.equal(e.message, COULD_NOT_REACH_SERVER_ERROR);
                return true;
            },
        );
        assert.strictEqual(spy.mock.callCount(), 1);
        assert.strictEqual(spy.mock.calls[0].arguments[0], "PlayerManagerImpl.moveTo request failed for player ID 1234567!");
    });

    it("promote (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => await manager.promote());
    });

    it("setTransferStatus - transfer listed (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => await manager.setTransferStatus({
            status: TransferStatus.TRANSFER_LISTED,
            askingPrice: 100_000,
        }));
    });

    it("setTransferStatus - not listed (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => await manager.setTransferStatus({
            status: TransferStatus.NOT_LISTED,
        }));
    });

    it("extendContract - 1 season (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => await manager.extendContract(1));
    });

    it("terminateContract (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => await manager.terminateContract());
    });

    it("requestTalentReport (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => await manager.requestTalentReport(123_456));
    });

    it("scout - professional (happy flow)", async () => {
        // given
        mock.method(global, "fetch", async () => {
            return {
                ok: true,
            };
        });

        // when - then
        await assert.doesNotReject(async () => await manager.scout(ScoutType.PROFESSIONAL));
    });

    afterEach(() => {
        mock.restoreAll();
    });
});
