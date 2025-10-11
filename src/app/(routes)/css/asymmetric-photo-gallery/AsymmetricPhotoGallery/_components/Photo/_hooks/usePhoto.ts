import { useRef, useState } from "react";
import { useAsymmetricPhotoGalleryContext } from "../../../Context";

export const usePhoto = (index: number, isSelected: boolean) => {
  const { setCurrentPhotoPosition, setSelectedPhotoIndex } =
    useAsymmetricPhotoGalleryContext();

  const PhotoRef = useRef<HTMLDivElement | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePhotoPosition = () => {
    const photo = PhotoRef.current;
    if (!photo) return;
    const { top, left } = photo.getBoundingClientRect();
    setCurrentPhotoPosition({ top, left });
  };

  const handlePhotoClick = () => {
    if (!isSelected) {
      handlePhotoPosition();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setSelectedPhotoIndex(index + 1);
      }, 1);
    } else {
      setSelectedPhotoIndex(undefined);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  return {
    PhotoRef,
    isImageLoaded,
    setIsImageLoaded,
    handlePhotoClick,
    handlePhotoPosition,
  };
};
