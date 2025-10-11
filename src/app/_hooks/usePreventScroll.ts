import { useEffect } from "react";

export const usePreventScroll = (
  condition: boolean | string | number | (number | undefined)
) => {
  useEffect(() => {
    if (!Boolean(condition)) {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.paddingInlineEnd = "0rem";
    } else {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.paddingInlineEnd = "1rem";
    }
  }, [condition]);
};
