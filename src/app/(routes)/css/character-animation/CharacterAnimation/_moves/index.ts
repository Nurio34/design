export interface AnimationState {
  row: number;
  frames: number;
  timeParameter: number;
}

export interface Moves {
  stand: AnimationState;
  step: AnimationState;
  die: AnimationState;
  attack: AnimationState;
  defence: AnimationState;
  walk: AnimationState;
}

export const moves: Moves = {
  stand: {
    row: 0,
    frames: 6,
    timeParameter: 0.2,
  },
  step: {
    row: 1,
    frames: 3,
    timeParameter: 0.1,
  },
  die: {
    row: 2,
    frames: 6,
    timeParameter: 0.2,
  },
  attack: {
    row: 3,
    frames: 8,
    timeParameter: 0.075,
  },
  defence: {
    row: 4,
    frames: 4,
    timeParameter: 0.2,
  },
  walk: {
    row: 5,
    frames: 12,
    timeParameter: 0.1,
  },
};
