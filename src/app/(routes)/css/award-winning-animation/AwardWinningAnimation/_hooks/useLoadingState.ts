import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import { Dispatch, SetStateAction, useEffect } from "react";
import { LoadingStateType } from "../Client";

export const useLoadingState = (
  images: UnsplashPhoto[],
  setLoadingState: Dispatch<SetStateAction<LoadingStateType>>
) => {
  useEffect(() => {
    let loadedCount = 0;

    setLoadingState({ progress: 0, isLoading: true, images: [] });

    images.forEach((image) => {
      const img = new Image();
      img.src = image.urls.regular;

      img.onload = () => {
        loadedCount++;
        const progress = (loadedCount / images.length) * 100;
        const src = img.src;
        const description = image.alt_description;

        setLoadingState((prev) => ({
          progress,
          isLoading: loadedCount !== images.length,
          images: [...prev.images, { src, description }],
        }));
      };

      img.onerror = () => {
        loadedCount++;
        const progress = (loadedCount / images.length) * 100;

        setLoadingState((prev) => ({
          ...prev,
          progress,
          isLoading: loadedCount !== images.length,
        }));
      };
    });
  }, [images, setLoadingState]);
};
