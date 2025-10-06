import { Dispatch, SetStateAction, useEffect } from "react";
import { useAwardWinningAnimationContext } from "../../../Context";
import { BigListMoveType } from "..";

export const useWheelMove = (
  bigListMove: BigListMoveType,
  setBigListMove: Dispatch<SetStateAction<BigListMoveType>>,
  bigImageListWidth: number
) => {
  const { isInBigListMode, isMoving, moveX } = bigListMove;

  const {
    isInitialAnimationEnded,
    imagePlaceholderWidth,
    ImagePlaceholdersRef,
    isLastImageAnimationEnded,
  } = useAwardWinningAnimationContext();

  useEffect(() => {
    if (!isInitialAnimationEnded || !isLastImageAnimationEnded) return;

    const handleScroll = (e: WheelEvent) => {
      const deltaY = e.deltaY;

      if (!isInBigListMode)
        setBigListMove((prev) => ({ ...prev, isInBigListMode: true }));

      if (moveX === 0 && deltaY < 0) return;
      if (moveX > bigImageListWidth - imagePlaceholderWidth && deltaY > 0)
        return;

      if (isInBigListMode)
        setBigListMove((prev) => ({
          ...prev,
          isMoving: true,
          moveX: prev.moveX + deltaY,
        }));
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [
    isInitialAnimationEnded,
    bigListMove,
    imagePlaceholderWidth,
    bigImageListWidth,
    isInBigListMode,
    moveX,
    setBigListMove,
    ImagePlaceholdersRef,
    isLastImageAnimationEnded,
  ]);

  useEffect(() => {
    if (isMoving) setBigListMove((prev) => ({ ...prev, isMoving: false }));
  }, [isMoving, setBigListMove]);
};
