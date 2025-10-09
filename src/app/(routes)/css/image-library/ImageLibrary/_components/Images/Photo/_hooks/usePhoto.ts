import { useEffect, useRef, useState } from "react";

export interface PhotoStateType {
  width: number;
  height: number;
  top: number;
  left: number;
}

export const usePhoto = () => {
  const PhotorRef = useRef<HTMLDivElement | null>(null);
  const [photoState, setPhotoState] = useState<PhotoStateType>({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const container = PhotorRef.current;
    if (!container) return;

    const handleContainer = () => {
      const { width, height, top, left } = container.getBoundingClientRect();
      setPhotoState({ width, height, top, left });
    };

    handleContainer();

    window.addEventListener("resize", handleContainer);

    return () => window.removeEventListener("resize", handleContainer);
  }, []);
  return { PhotorRef, photoState };
};
