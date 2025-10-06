import { useAwardWinningAnimationContext } from "@/app/(routes)/css/award-winning-animation/AwardWinningAnimation/Context";
import { RefObject, useEffect } from "react";

export const useImagePlaceHolders = (
  ImagePlaceholderRef: RefObject<HTMLLIElement | null>,
  index: number
) => {
  const { setImagePlaceholderWidth, ImagePlaceholdersRef } =
    useAwardWinningAnimationContext();

  useEffect(() => {
    const container = ImagePlaceholderRef.current;

    if (!container) return;

    if (index === 0) {
      const width = container.getBoundingClientRect().width;
      setImagePlaceholderWidth(width);
    }

    ImagePlaceholdersRef.current.push(container);
  }, [
    ImagePlaceholderRef,
    index,
    setImagePlaceholderWidth,
    ImagePlaceholdersRef,
  ]);
};
