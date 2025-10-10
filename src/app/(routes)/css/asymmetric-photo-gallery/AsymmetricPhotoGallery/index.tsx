"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";
import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";

function AsymmetricPhotoGallery({ images }: { images: UnsplashPhoto[] }) {
  return (
    <Provider store={store}>
      <Client images={images} />
    </Provider>
  );
}
export default AsymmetricPhotoGallery;
