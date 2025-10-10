import { useRef, useState } from "react";
import { useImageLibraryContext } from "../../../../Context";

export const usePhoto = (isCurrent: boolean, index: number) => {
  const { setCurrentIndex, setCurrentPhotoState } = useImageLibraryContext();

  const PhotorRef = useRef<HTMLDivElement | null>(null);

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (!isCurrent) setCurrentIndex(index);
    else {
      const photo = PhotorRef.current;
      if (!photo) return;

      const { width, height, top, left } = photo.getBoundingClientRect();
      setCurrentPhotoState({ width, height, top, left });

      if (!isSelected) {
        setIsSelected(true);
      } else setIsSelected(false);
    }
  };

  return {
    PhotorRef,
    isImageLoaded,
    setIsImageLoaded,
    isSelected,
    handleClick,
  };
};
