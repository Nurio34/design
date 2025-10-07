"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import { MorphingGradientsAnimatedBackgroundProvider } from "./Context";
import Client from "./Client";

function MorphingGradientsAnimatedBackground() {
  return (
    <Provider store={store}>
      <MorphingGradientsAnimatedBackgroundProvider>
        <Client />
      </MorphingGradientsAnimatedBackgroundProvider>
    </Provider>
  );
}
export default MorphingGradientsAnimatedBackground;
