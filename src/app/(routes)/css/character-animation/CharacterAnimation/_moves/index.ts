export interface Moves {
  stand: {
    row: number;
    frames: number;
  };
  step: {
    row: number;
    frames: number;
  };
  die: {
    row: number;
    frames: number;
  };
  attack: {
    row: number;
    frames: number;
  };
  defence: {
    row: number;
    frames: number;
  };
  walk: {
    row: number;
    frames: number;
  };
}

export const moves: Moves = {
  stand: {
    row: 0,
    frames: 5,
  },
  step: {
    row: 1,
    frames: 2,
  },
  die: {
    row: 2,
    frames: 5,
  },
  attack: {
    row: 3,
    frames: 7,
  },
  defence: {
    row: 4,
    frames: 3,
  },
  walk: {
    row: 5,
    frames: 11,
  },
};
