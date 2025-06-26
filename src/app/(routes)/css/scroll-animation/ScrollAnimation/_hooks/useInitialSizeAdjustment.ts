import { useEffect, useRef, useState } from "react";
import { useScrollAnimationContext } from "../Context";

export const useInitialSizeAdjustment = () => {
  const { estimatedScroll, totalCards, setDivHeightGlobal } =
    useScrollAnimationContext();

  const DivRef = useRef<HTMLDivElement | null>(null);
  const [divHeight, setDivHeight] = useState<undefined | number>(undefined);
  const [totalDivHeight, setTotalDivHeight] = useState<undefined | number>(
    undefined
  );

  useEffect(() => {
    if (DivRef.current)
      setDivHeight(DivRef.current.getBoundingClientRect().height);
  }, []);

  useEffect(() => {
    if (divHeight) {
      const extraSpace = estimatedScroll * totalCards;
      const totalDivHeight = divHeight + extraSpace;
      setTotalDivHeight(totalDivHeight);
      setDivHeightGlobal(divHeight);
    }
  }, [divHeight, estimatedScroll, setDivHeightGlobal, totalCards]);

  return { DivRef, divHeight, totalDivHeight };
};
