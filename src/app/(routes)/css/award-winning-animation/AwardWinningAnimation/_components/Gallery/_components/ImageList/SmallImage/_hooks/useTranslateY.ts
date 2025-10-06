import { useAwardWinningAnimationContext } from "@/app/(routes)/css/award-winning-animation/AwardWinningAnimation/Context";
import { Dispatch, SetStateAction, useEffect } from "react";

export const useTranslateY = (
  setTranslateY: Dispatch<SetStateAction<number>>,
  isInBigListMode: boolean
) => {
  const { isLastImageAnimationEnded } = useAwardWinningAnimationContext();

  useEffect(() => {
    if (!isLastImageAnimationEnded) {
      setTranslateY(0);
      return;
    }

    const timeoutId = setTimeout(() => {
      if (isInBigListMode) setTranslateY(0);
      else setTranslateY(-100);
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [isInBigListMode, isLastImageAnimationEnded, setTranslateY]);
};
