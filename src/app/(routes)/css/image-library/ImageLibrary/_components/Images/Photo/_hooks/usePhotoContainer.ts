import { useEffect, useRef } from "react";
import { useImageLibraryContext } from "../../../../Context";

export const usePhotoContainer = (isCurrent: boolean) => {
  const { setPhotoContainerState } = useImageLibraryContext();
  const PhotoContainerRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const container = PhotoContainerRef.current;
    if (!container) return;

    const handlePhotoContainerState = () => {
      const { width, height } = container.getBoundingClientRect();
      if (isCurrent) setPhotoContainerState({ width, height });
    };

    window.addEventListener("resize", handlePhotoContainerState);

    return () =>
      window.removeEventListener("resize", handlePhotoContainerState);
  }, [isCurrent, setPhotoContainerState]);

  useEffect(() => {
    const container = PhotoContainerRef.current;
    if (!container || !isCurrent) return;

    const handlePhotoContainerState = () => {
      const { width, height } = container.getBoundingClientRect();
      setPhotoContainerState({ width, height });
    };
    handlePhotoContainerState();
  }, [setPhotoContainerState]);

  return { PhotoContainerRef };
};
