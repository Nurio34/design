"use client";

import { Provider } from "react-redux";
import { ScrollAnimationProvider } from "./Context";
import { store } from "@/store";
import Client from "./Client";

function ScrollAnimation() {
  return (
    <Provider store={store}>
      <ScrollAnimationProvider>
        <Client />
      </ScrollAnimationProvider>
    </Provider>
  );
}
export default ScrollAnimation;
