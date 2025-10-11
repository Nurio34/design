"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import Client from "./Client";
import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import { AsymmetricPhotoGalleryProvider } from "./Context";

function AsymmetricPhotoGallery({ images }: { images: UnsplashPhoto[] }) {
  return (
    <Provider store={store}>
      <AsymmetricPhotoGalleryProvider images={images}>
        <Client />
      </AsymmetricPhotoGalleryProvider>
    </Provider>
  );
}
export default AsymmetricPhotoGallery;
