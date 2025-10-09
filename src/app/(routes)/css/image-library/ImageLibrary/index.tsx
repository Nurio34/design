"use client";
import { store } from "@/store";
import { Provider } from "react-redux";
import { ImageLibraryrovider } from "./Context";
import Client from "./Client";
import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";

function ImageLibrary({ images }: { images: UnsplashPhoto[] }) {
  return (
    <Provider store={store}>
      <ImageLibraryrovider images={images}>
        <Client />
      </ImageLibraryrovider>
    </Provider>
  );
}
export default ImageLibrary;
