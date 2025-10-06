"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";
import { AnimalSliderProvider } from "./Context";

function AnimalSlider() {
  return (
    <Provider store={store}>
      <AnimalSliderProvider>
        <Client />
      </AnimalSliderProvider>
    </Provider>
  );
}
export default AnimalSlider;
