import { Dispatch, SetStateAction, useEffect } from "react";
import { useAwardWinningAnimationContext } from "../../../Context";
import { ImageType } from "../../../Client";

export const useInitialBigPhoto = (
  setBigPhoto: Dispatch<SetStateAction<ImageType | undefined>>
) => {
  const { eightImage } = useAwardWinningAnimationContext();

  useEffect(() => {
    if (eightImage.length === 0) return;

    setBigPhoto(eightImage[0]);
  }, [eightImage, setBigPhoto]);
};
