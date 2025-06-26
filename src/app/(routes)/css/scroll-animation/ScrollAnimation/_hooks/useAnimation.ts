import { useEffect } from "react";
import { useScrollAnimationContext } from "../Context";

export const useAnimation = () => {
  const { scrollTop, estimatedScroll, setIndexes } =
    useScrollAnimationContext();

  useEffect(() => {
    if (scrollTop < estimatedScroll)
      return setIndexes({ current: -1, next: -1 });

    const currentIndex = Math.floor(scrollTop / estimatedScroll) - 1;
    const nextIndex = currentIndex + 1;

    setIndexes({ current: currentIndex, next: nextIndex });
  }, [scrollTop, estimatedScroll, setIndexes]);
};
