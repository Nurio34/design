"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import { AnimatedGlowingBorderProvider } from "./Context";
import Client from "./Client";

function AnimatedGlowingBorder() {
  return (
    <Provider store={store}>
      <AnimatedGlowingBorderProvider>
        <Client />
      </AnimatedGlowingBorderProvider>
    </Provider>
  );
}
export default AnimatedGlowingBorder;
