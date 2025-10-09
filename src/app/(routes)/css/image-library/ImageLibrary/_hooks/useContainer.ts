import { useEffect, useRef } from "react";
import { useImageLibraryContext } from "../Context";

export const useContainer = () => {
  const { setContainerState } = useImageLibraryContext();

  const ContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ContainerRef.current;
    if (!container) return;

    const handleContainer = () => {
      const { width, height, top, left } = container.getBoundingClientRect();
      setContainerState({ width, height, top, left });
    };

    handleContainer();

    window.addEventListener("resize", handleContainer);

    return () => window.removeEventListener("resize", handleContainer);
  }, [setContainerState]);

  return { ContainerRef };
};
