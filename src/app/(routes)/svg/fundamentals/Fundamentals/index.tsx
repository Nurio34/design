"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";

function Fundamentals() {
  return (
    <Provider store={store}>
      <Client />
    </Provider>
  );
}
export default Fundamentals;
