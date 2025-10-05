import { useEffect } from "react";
import { useAwardWinningAnimationContext } from "../Context";

export const useInitialAnimation = (isLoading: boolean) => {
  const { setIsInitialAnimationEnded } = useAwardWinningAnimationContext();

  useEffect(() => {
    if (isLoading) return;

    const timeoutId = setTimeout(() => {
      setIsInitialAnimationEnded(true);
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, [isLoading, setIsInitialAnimationEnded]);
};
