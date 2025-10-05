import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export const useImageContainerWidth = (
  ImageContainerRef: RefObject<HTMLLIElement | null>,
  setImagesContainerWidth: Dispatch<SetStateAction<number>>
) => {
  useEffect(() => {
    const container = ImageContainerRef.current;

    if (!container) return;

    const width = container.getBoundingClientRect().width;
    setImagesContainerWidth(width);
  }, [ImageContainerRef, setImagesContainerWidth]);
};
