import { CSSProperties, useMemo } from "react";
import { useAsymmetricPhotoGalleryContext } from "../../../Context";

export const useDivStyle = (
  isSelected: boolean,
  photoContainerSize: {
    width: number;
    height: number;
  },
  ratio: number
) => {
  const { currentPhotoPosition, screenSize } =
    useAsymmetricPhotoGalleryContext();

  const divStyle: CSSProperties = useMemo(() => {
    if (!isSelected) {
      return {
        width: photoContainerSize.width || "100%",
        height: photoContainerSize.height || "100%",
        position: "static",
        top: currentPhotoPosition.top,
        left: currentPhotoPosition.left,
      };
    }

    const screenRatio = screenSize.width / screenSize.height;
    const imageRatio = ratio;

    const padding = 0; // 2rem

    let newWidth, newHeight;

    if (imageRatio > screenRatio) {
      // Image is wider than screen, fit to width
      newWidth = screenSize.width - padding;
      newHeight = newWidth / imageRatio;
    } else {
      // Image is taller than or same as screen, fit to height
      newHeight = screenSize.height - padding;
      newWidth = newHeight * imageRatio;
    }

    // After fitting, check if the other dimension overflows due to padding
    if (newHeight > screenSize.height - padding) {
      newHeight = screenSize.height - padding;
      newWidth = newHeight * imageRatio;
    }
    if (newWidth > screenSize.width - padding) {
      newWidth = screenSize.width - padding;
      newHeight = newWidth / imageRatio;
    }

    return {
      width: newWidth,
      height: newHeight,
      position: "fixed",
      top: `calc(50% - ${newHeight / 2}px)`,
      left: `calc(50% - ${newWidth / 2}px)`,
      zIndex: 1000,
    };
  }, [isSelected, screenSize, photoContainerSize, currentPhotoPosition, ratio]);

  return { divStyle };
};
