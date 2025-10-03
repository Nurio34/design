"use client";

import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";

function AwardWinningAnimation({ images }: { images: UnsplashPhoto[] }) {
  return (
    <Provider store={store}>
      <Client images={images} />
    </Provider>
  );
}
export default AwardWinningAnimation;
