import { useEffect, useRef, useState } from "react";

export const usePhotoContainer = () => {
  const PhotoContainerRef = useRef<HTMLLIElement | null>(null);

  const [photoContainerSize, setPhotoContainerSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleContainerSize = () => {
      const container = PhotoContainerRef.current;
      if (!container) return;
      const { width, height } = container.getBoundingClientRect();
      setPhotoContainerSize({ width, height });
    };

    handleContainerSize();

    window.addEventListener("resize", handleContainerSize);

    return () => window.removeEventListener("resize", handleContainerSize);
  }, []);

  return { PhotoContainerRef, photoContainerSize };
};
