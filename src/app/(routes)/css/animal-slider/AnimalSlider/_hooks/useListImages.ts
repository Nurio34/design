import { Dispatch, SetStateAction, useEffect } from "react";
import { ListImageType, WrapperStateType } from "../Context";

export const useListImages = (
  wrapperState: WrapperStateType,
  setListImages: Dispatch<SetStateAction<ListImageType>>
) => {
  useEffect(() => {
    const { width, height, gapX, gapY } = wrapperState;
    if (width === 0 || height === 0 || gapX === 0 || gapY === 0) return;

    const listImageWidth = (wrapperState.width / 2 - gapX * 3) / 4;
    const listImageHeigt = (listImageWidth * 16) / 12;

    const bottomOffset = 25;
    const top = height - listImageHeigt - bottomOffset;

    const leftOffset = width / 2;
    const firsImageLeft = leftOffset;

    setListImages({
      width: listImageWidth,
      height: listImageHeigt,
      top,
      firsImageLeft,
    });
  }, [wrapperState, setListImages]);
};
