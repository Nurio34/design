import { Dispatch, SetStateAction, useEffect } from "react";
import { ListImageType, ScreenSizeType } from "../../../Context";

export const useRender = (
  listImages: ListImageType,
  screenSize: ScreenSizeType,
  setIsRendered: Dispatch<SetStateAction<boolean>>
) => {
  const { width, height, top, firsImageLeft } = listImages;
  const { gapX } = screenSize;

  useEffect(() => {
    if (!width || !height || !top || !firsImageLeft || !gapX) return;

    setIsRendered(true);
  }, [listImages, screenSize]);
};
