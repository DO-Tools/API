# PlayerManager API

## Features
First, get an instance of `PlayerManager` using a player ID:

```typescript
import PlayerManager, { ScoutType, Squad } from "do-tools-api/PlayerManager";

const manager = PlayerManager.manage(123_456_789);
```
### Move player to first/youth squad
```typescript
manager.moveTo(Squad.FIRST_TEAM);
```
### Promote player
```typescript
manager.promote();
```
### Set transfer status
```typescript
manager.setTransferStatus({
    status: TransferStatus.TRANSFER_LISTED,
    askingPrice: 100_000,
});
// or
manager.setTransferStatus({
    status: TransferStatus.NOT_LISTED,
});
```
### Manage contract
```typescript
manager.extendContract(1);
// or
manager.terminateContract();
```
### Find player's talent

```typescript
const coachId = 111_222;
manager.requestTalentReport(coachId);
// or
manager.scout(ScoutType.PROFESSIONAL);
```