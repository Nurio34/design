import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  navMenu: boolean;
  maxColumnHeight: number;
  sectionSize: {
    width: number | undefined;
    height: number | undefined;
  };
}

const initialState: ModalState = {
  navMenu: false,
  maxColumnHeight: 0,
  sectionSize: { width: undefined, height: undefined },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openNavMenu: (state) => {
      state.navMenu = true;
    },
    closeNavMenu: (state) => {
      state.navMenu = false;
    },
    setMaxColumnHeight: (state, action: PayloadAction<number>) => {
      state.maxColumnHeight = action.payload;
    },
    setSectionSize: (
      state,
      action: PayloadAction<{ width: number; height: number }>
    ) => {
      state.sectionSize = action.payload;
    },

    reset: () => initialState,
  },
});

export const {
  openNavMenu,
  closeNavMenu,
  setMaxColumnHeight,
  setSectionSize,
  reset,
} = modalSlice.actions;

export default modalSlice.reducer;
