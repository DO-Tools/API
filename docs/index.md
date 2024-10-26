# DO-Tools API

## Features
- Players ([link](#players))
  - move players to first team ([link](#move-players-to-first-team))
  - move players to youth team ([link](#move-players-to-youth-team))

### Players

#### Move players to first team
DO.SquadManager.movePlayersToFirstTeam API docs ([link][todo])

```typescript
import DO from "do-tools-api";

const playerIds = [
    1_234_567, 2_345_678, 3_456_789,
];

DO.SquadManager.movePlayersToFirstTeam(playerIds);
```

#### Move players to youth team
DO.SquadManager.movePlayersToYouthTeam API docs ([link][todo])

```typescript
import DO from "do-tools-api";

const playerIds = [
1_234_567, 2_345_678, 3_456_789,
];

DO.SquadManager.movePlayersToYouthTeam(playerIds);
```

[todo]: "#"