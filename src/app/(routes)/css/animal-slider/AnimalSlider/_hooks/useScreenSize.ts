import { Dispatch, SetStateAction, useEffect } from "react";
import { ScreenSizeType } from "../Context";

export const useScreenSize = (
  setScreenSize: Dispatch<SetStateAction<ScreenSizeType>>
) => {
  useEffect(() => {
    const handleScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const gapX = (width * 2) / 100;
      const gapY = height / 2 / 100;

      setScreenSize({ width, height, gapX, gapY });
    };

    handleScreenSize();

    window.addEventListener("resize", handleScreenSize);

    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);
};
