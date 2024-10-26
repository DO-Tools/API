import { PlayerManagerImpl } from "./PlayerManagerImpl.js";
import { PlayerManagerHolder } from "../public/index.js";

export enum Squad {
    YOUTH_TEAM = "movetoyouth",
    FIRST_TEAM = "moveto1st",
}

export enum TransferStatus {
    TRANSFER_LISTED = "1",
    LOAN_LISTED = "2",
    NOT_LISTED = "3",
}

export type TransferListedAction = {
    status: TransferStatus.TRANSFER_LISTED;
    askingPrice: number;
};

export type LoanListedAction = {
    status: TransferStatus.LOAN_LISTED;
    askingPrice?: number;
};

export type NotTransferListedAction = {
    status: TransferStatus.NOT_LISTED;
    askingPrice?: number;
};

export type TransferStatusAction = TransferListedAction | LoanListedAction | NotTransferListedAction;

export enum ScoutType {
    PROFESSIONAL = "1",
    SEMI_PROFESSIONAL = "2",
    AMATEUR = "3",
}

export interface PlayerManager {
    moveTo(squad: Squad): Promise<void>;
    promote(): Promise<void>;
    setTransferStatus(transferStatus: TransferStatusAction): Promise<void>;
    extendContract(seasons: number): Promise<void>;
    terminateContract(): Promise<void>;
    requestTalentReport(coachId: number): Promise<void>;
    scout(scoutType: ScoutType): Promise<void>;
}

const manage = (playerId: number): PlayerManager => new PlayerManagerImpl(playerId);

export default {
    manage,
} as PlayerManagerHolder;
