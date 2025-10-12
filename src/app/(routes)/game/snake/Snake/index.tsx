"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";
import { SnakeProvider } from "./Context";

function Snake() {
  return (
    <Provider store={store}>
      <SnakeProvider>
        <Client />
      </SnakeProvider>
    </Provider>
  );
}
export default Snake;
