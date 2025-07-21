import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  navMenu: boolean;
  maxColumnHeight: number;
}

const initialState: ModalState = {
  navMenu: false,
  maxColumnHeight: 0,
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

    reset: () => initialState,
  },
});

export const { openNavMenu, closeNavMenu, setMaxColumnHeight, reset } =
  modalSlice.actions;

export default modalSlice.reducer;
