import { useState } from "react";
import { useImageLibraryContext } from "../../../../Context";
import { PhotoStateType } from "./usePhoto";

export const useCurrentState = (index: number, photoState: PhotoStateType) => {
  const { setCurrentIndex, currentIndex, containerState } =
    useImageLibraryContext();
  const isCurrent = currentIndex === index;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    console.log({ containerState, photoState });

    if (!isCurrent) setCurrentIndex(index);
    else {
      if (!isSelected) setIsSelected(true);
      else setIsSelected(false);
    }
  };

  return {
    isCurrent,
    isSelected,
    isImageLoaded,
    setIsImageLoaded,
    handleClick,
  };
};
