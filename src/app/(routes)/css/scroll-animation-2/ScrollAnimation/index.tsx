"use client";
import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";

function ScrollAnimation() {
  return (
    <Provider store={store}>
      <Client />
    </Provider>
  );
}
export default ScrollAnimation;
