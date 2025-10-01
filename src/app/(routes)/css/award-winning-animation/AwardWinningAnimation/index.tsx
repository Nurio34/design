"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";
import { UnsplashPhoto } from "./_types/unsplashPhoto";

function AwardWinningAnimation({ images }: { images: UnsplashPhoto }) {
  return (
    <Provider store={store}>
      <Client images={images} />
    </Provider>
  );
}
export default AwardWinningAnimation;
