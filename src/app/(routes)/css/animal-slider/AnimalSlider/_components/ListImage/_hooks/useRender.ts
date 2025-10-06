import { Dispatch, SetStateAction, useEffect } from "react";
import { ListImageType, WrapperStateType } from "../../../Context";

export const useRender = (
  listImages: ListImageType,
  wrapperState: WrapperStateType,
  setIsRendered: Dispatch<SetStateAction<boolean>>
) => {
  const { width, height, top, firsImageLeft } = listImages;
  const { gapX } = wrapperState;

  useEffect(() => {
    if (!width || !height || !top || !firsImageLeft || !gapX) return;

    setIsRendered(true);
  }, [listImages, wrapperState]);
};
