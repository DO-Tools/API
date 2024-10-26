import {
    PlayerManager,
    ScoutType,
    Squad,
    TransferStatusAction,
} from "./PlayerManager.js";

const BASE_URL = "https://www.dugout-online.com";

const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
};

export class PlayerManagerImpl implements PlayerManager {
    private readonly _playerId: number;

    constructor(playerId: number) {
        this._playerId = playerId;
    }

    async moveTo(squad: Squad): Promise<void> {
        try {
            const res = await fetch(this.playerUrl, {
                method: "POST",
                headers: headers,
                body: new URLSearchParams({
                    [squad]: "1",
                }),
                credentials: "include",
            });
            if (!res.ok) {
                console.error(`PlayerManagerImpl.moveTo request failed for player ID ${this._playerId}!`);
            }
        } catch (e) {
            console.error(`PlayerManagerImpl.moveTo request failed for player ID ${this._playerId}!`, e);
            throw e;
        }
    };

    async promote(): Promise<void> {
        try {
            const res = await fetch(this.playerUrl, {
                method: "POST",
                headers: headers,
                body: new URLSearchParams({
                    promote: "1",
                }),
                credentials: "include",
            });
            if (!res.ok) {
                console.error(`PlayerManagerImpl.promote request failed for player ID ${this._playerId}!`);
            }
        } catch (e) {
            console.error(`PlayerManagerImpl.promote request failed for player ID ${this._playerId}!`, e);
            throw e;
        }
    }

    async setTransferStatus({ status, askingPrice = 0 }: TransferStatusAction): Promise<void> {
        try {
            const res = await fetch(this.playerUrl, {
                method: "POST",
                headers: headers,
                body: new URLSearchParams({
                    status: status,
                    asking_price: askingPrice.toString(),
                    settransfer: "1",
                }),
                credentials: "include",
            });
            if (!res.ok) {
                console.error(`PlayerManagerImpl.setTransferStatus request failed for player ID ${this._playerId}!`);
            }
        } catch (e) {
            console.error(`PlayerManagerImpl.setTransferStatus request failed for player ID ${this._playerId}!`, e);
            throw e;
        }
    }

    async extendContract(seasons: number): Promise<void> {
        try {
            const res = await fetch(this.playerUrl, {
                method: "POST",
                headers: headers,
                body: new URLSearchParams({
                    extend_contract: "1",
                    seasons: seasons.toString(),
                }),
                credentials: "include",
            });
            if (!res.ok) {
                console.error(`PlayerManagerImpl.extendContract request failed for player ID ${this._playerId}!`);
            }
        } catch (e) {
            console.error(`PlayerManagerImpl.extendContract request failed for player ID ${this._playerId}!`, e);
            throw e;
        }
    }

    async terminateContract(): Promise<void> {
        try {
            const res = await fetch(this.playerUrl, {
                method: "POST",
                headers: headers,
                body: new URLSearchParams({
                    terminatecontract: "1",
                }),
                credentials: "include",
            });
            if (!res.ok) {
                console.error(`PlayerManagerImpl.terminateContract request failed for player ID ${this._playerId}!`);
            }
        } catch (e) {
            console.error(`PlayerManagerImpl.terminateContract request failed for player ID ${this._playerId}!`, e);
            throw e;
        }
    }

    async requestTalentReport(coachId: number): Promise<void> {
        try {
            const res = await fetch(this.playerUrl, {
                method: "POST",
                headers: headers,
                body: new URLSearchParams({
                    requestinfo: "1",
                    requestinfo_coach_id: coachId.toString(),
                }),
                credentials: "include",
            });
            if (!res.ok) {
                console.error(`PlayerManagerImpl.requestTalentReport request failed for player ID ${this._playerId}!`);
            }
        } catch (e) {
            console.error(`PlayerManagerImpl.requestTalentReport request failed for player ID ${this._playerId}!`, e);
            throw e;
        }    }

    async scout(scoutType: ScoutType): Promise<void> {
        try {
            const res = await fetch(this.playerUrl, {
                method: "POST",
                headers: headers,
                body: new URLSearchParams({
                    sendscout: "1",
                    scouttype: scoutType,
                }),
                credentials: "include",
            });
            if (!res.ok) {
                console.error(`PlayerManagerImpl.scout request failed for player ID ${this._playerId}!`);
            }
        } catch (e) {
            console.error(`PlayerManagerImpl.scout request failed for player ID ${this._playerId}!`, e);
            throw e;
        }
    }

    // privates
    private get playerUrl(): URL {
        return new URL(`${BASE_URL}/players/details/playerID/${this._playerId}`);
    }
}
