import { useEffect, useRef, useState } from "react";

export const useImageContainer = (columnCount: number | undefined) => {
  const ImageContainerRef = useRef<HTMLLIElement>(null);
  const [imageContainerState, setImageContainerState] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };

  useEffect(() => {
    const handleImageContainerState = () => {
      const container = ImageContainerRef.current;
      if (!container) return;

      const { width, height, top, left } = container.getBoundingClientRect();
      setImageContainerState({ width, height, top, left });
    };

    handleImageContainerState();

    const intId = setInterval(() => handleImageContainerState(), 1000 / 5);

    return () => clearInterval(intId);
  }, [ImageContainerRef, columnCount]);

  return { ImageContainerRef, imageContainerState, handleClick };
};
