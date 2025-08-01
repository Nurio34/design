"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";

function ColumnsNRows() {
  return (
    <Provider store={store}>
      <Client />
    </Provider>
  );
}
export default ColumnsNRows;
