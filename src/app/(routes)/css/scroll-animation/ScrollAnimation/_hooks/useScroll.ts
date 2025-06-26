import { useEffect, useRef } from "react";
import { useScrollAnimationContext } from "../Context";

export const useScroll = () => {
  const { setScrollTop } = useScrollAnimationContext();
  const SectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = SectionRef.current;

    const handleScroll = () => {
      if (section) setScrollTop(section.scrollTop);
    };

    if (section) {
      section.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (section) {
        section.removeEventListener("scroll", handleScroll);
      }
    };
  }, [setScrollTop]);

  return { SectionRef };
};
