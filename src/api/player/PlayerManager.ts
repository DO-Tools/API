enum TransferStatus {
    TRANSFER_LISTED = "1",
    LOAN_LISTED = "2",
    NOT_LISTED = "3",
}

type TransferListedAction = {
    status: TransferStatus.TRANSFER_LISTED;
    askingPrice: number;
};

type LoanListedAction = {
    status: TransferStatus.LOAN_LISTED;
    askingPrice: 0;
};

type NotTransferListedAction = {
    status: TransferStatus.NOT_LISTED;
    askingPrice: 0;
};

export type TransferStatusAction = TransferListedAction | LoanListedAction | NotTransferListedAction;

export enum ScoutType {
    PROFESSIONAL = "1",
    SEMI_PROFESSIONAL = "2",
    AMATEUR = "3",
}

export interface PlayerManager {
    moveToFirstTeam(): Promise<void>;
    moveToYouthTeam(): Promise<void>;
    promote(): Promise<void>;
    setTransferStatus(transferStatus: TransferStatusAction): Promise<void>;
    extendContract(seasons: number): Promise<void>;
    terminateContract(): Promise<void>;
    requestTalentReport(coachId: number): Promise<void>;
    scout(scoutType: ScoutType): Promise<void>;
}

export enum SquadAction {
    MOVE_TO_YOUTH_TEAM = "movetoyouth",
    MOVE_TO_FIRST_TEAM = "moveto1st",
}

class PlayerManagerImpl implements PlayerManager {
    private readonly _playerId: number;


    constructor(playerId: number) {
        this._playerId = playerId;
    }

    async moveToFirstTeam(): Promise<void> {
        return await this._move(SquadAction.MOVE_TO_FIRST_TEAM);
    }

    async moveToYouthTeam(): Promise<void> {
        return await this._move(SquadAction.MOVE_TO_YOUTH_TEAM);
    }

    async promote(): Promise<void> {
    }

    async setTransferStatus(transferStatus: TransferStatusAction): Promise<void> {
        try {
            const res = await fetch(this.playerUrl, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    status: transferStatus.status,
                    asking_price: transferStatus.askingPrice.toString(),
                    settransfer: "1",
                }),
                credentials: "include",
            });
            if (!res.ok) {
                console.error(`PlayerManager.setTransferStatus request failed for player ID ${this._playerId}!`);
            }
        } catch (e) {
            console.error(`PlayerManager.setTransferStatus request failed for player ${this._playerId}!`, e);
            throw e;
        }
    }

    async extendContract(seasons: number): Promise<void> {
    }

    async terminateContract(): Promise<void> {
    }

    async requestTalentReport(coachId: number): Promise<void> {
    }

    async scout(scoutType: ScoutType): Promise<void> {
        try {
            const res = await fetch(this.scoutingUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    sendscout: "1",
                    scouttype: scoutType,
                }),
                credentials: "include",
            });
            if (!res.ok) {
                console.error(`PlayerManager.scout request failed for player ID ${this._playerId}!`);
            }
        } catch (e) {
            console.error(`PlayerManager.scout request failed for player ${this._playerId}!`, e);
            throw e;
        }
    }

    // privates
    private get playerUrl(): URL {
        return new URL(`/players/details/playerID/${this._playerId}`);
    }

    private get scoutingUrl(): URL {
        return new URL(`/players/sendscout/playerID/${this._playerId}`);
    }

    private _move = async (action: SquadAction): Promise<void> => {
        try {
            const res = await fetch(this.playerUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    [action]: "1",
                }),
                credentials: "include",
            });
            if (!res.ok) {
                console.error(`PlayerManager._move request failed for player ID ${this._playerId}!`);
            }
        } catch (e) {
            console.error(`PlayerManager._move request failed for player ${this._playerId}!`, e);
            throw e;
        }
    };
}

const manage = (playerId: number): PlayerManager => new PlayerManagerImpl(playerId);

export default {
    manage,
}