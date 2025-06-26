import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  navMenu: boolean;
}

const initialState: ModalState = {
  navMenu: false,
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

    reset: () => initialState,
  },
});

export const { openNavMenu, closeNavMenu, reset } = modalSlice.actions;

export default modalSlice.reducer;
