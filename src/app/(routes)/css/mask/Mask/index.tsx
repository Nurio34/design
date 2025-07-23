"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";

function Mask() {
  return (
    <Provider store={store}>
      <Client />
    </Provider>
  );
}
export default Mask;
