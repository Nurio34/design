"use client";

import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";
import { AwardWinningAnimationProvider } from "./Context";

function AwardWinningAnimation({ images }: { images: UnsplashPhoto[] }) {
  return (
    <Provider store={store}>
      <AwardWinningAnimationProvider>
        <Client images={images} />
      </AwardWinningAnimationProvider>
    </Provider>
  );
}
export default AwardWinningAnimation;
