import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { useAwardWinningAnimationContext } from "../../../../../Context";

export const useBigImageListWidth = (
  BigImageListRef: RefObject<HTMLUListElement | null>,
  setBigImageListWidth: Dispatch<SetStateAction<number>>
) => {
  const { imagePlaceholderWidth } = useAwardWinningAnimationContext();

  useEffect(() => {
    if (imagePlaceholderWidth === 0) return;
    const container = BigImageListRef.current;
    if (!container) return;

    const width = container.getBoundingClientRect().width;
    setBigImageListWidth(width);
  }, [imagePlaceholderWidth, BigImageListRef, setBigImageListWidth]);
};
