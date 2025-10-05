import { useEffect } from "react";
import { ImageType } from "../Client";
import { useAwardWinningAnimationContext } from "../Context";

export const useEightImage = (imageList: ImageType[][]) => {
  const { setEightImage } = useAwardWinningAnimationContext();

  useEffect(() => {
    if (imageList.length < 4) return;

    const firstImage = imageList[2][2];
    const nextFourImage = imageList[0];
    imageList[1].length = 3;
    const lastThreeImage = imageList[1];
    const eightImage = [firstImage, ...nextFourImage, ...lastThreeImage];
    setEightImage(eightImage);
  }, [imageList, setEightImage]);
};
