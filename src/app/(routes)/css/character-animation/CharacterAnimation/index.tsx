"use client";

import { Provider } from "react-redux";
import { CharacterAnimationProvider } from "./Context";
import { store } from "@/store";
import Client from "./Client";

function CharacterAnimation() {
  return (
    <Provider store={store}>
      <CharacterAnimationProvider>
        <Client />
      </CharacterAnimationProvider>
    </Provider>
  );
}
export default CharacterAnimation;
