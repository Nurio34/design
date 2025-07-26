"use client";

import { Provider } from "react-redux";
import Client from "./Client";
import { store } from "@/store";

function AnimatingCubes() {
  return (
    <Provider store={store}>
      <Client />
    </Provider>
  );
}
export default AnimatingCubes;
