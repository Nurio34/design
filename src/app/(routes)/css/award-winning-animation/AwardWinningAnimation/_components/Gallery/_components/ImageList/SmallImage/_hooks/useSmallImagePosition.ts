import { useAwardWinningAnimationContext } from "@/app/(routes)/css/award-winning-animation/AwardWinningAnimation/Context";
import { RefObject, useEffect } from "react";

export const useSmallImagePosition = (
  SmallImageRef: RefObject<HTMLLIElement | null>,
  index: number
) => {
  const { setSmallImagesPosition } = useAwardWinningAnimationContext();

  useEffect(() => {
    const smallImage = SmallImageRef.current;

    if (!smallImage) return;

    const handleSmallImagePosition = () => {
      const { top, left, width, height } = smallImage.getBoundingClientRect();

      setSmallImagesPosition((prev) =>
        prev.length < 8
          ? [...prev, { index, top, left, width, height }]
          : prev.map((item, ind) =>
              ind === index ? { ...item, top, left, width, height } : item
            )
      );
    };

    handleSmallImagePosition();
  }, [SmallImageRef, index, setSmallImagesPosition]);
};
