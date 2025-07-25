import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSectionSize } from "@/store/slices/modal";
import { useEffect, useRef, useState } from "react";

function Client() {
  const { navMenu } = useAppSelector((s) => s.modals);
  const dispatch = useAppDispatch();

  const handlerTimeout = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const handleRowContainerWidth = () => {
      if (handlerTimeout.current) clearTimeout(handlerTimeout.current);

      handlerTimeout.current = setTimeout(() => {
        const bodyWidth =
          window.document.documentElement.getBoundingClientRect().width;
        const navMenuWidth = document
          .querySelector("#NavMenu")!
          .getBoundingClientRect().width;

        const section = document.querySelector("#Section");
        if (!section) return;
        const sectionHeight = section.getBoundingClientRect().height;
        dispatch(
          setSectionSize({
            width: bodyWidth - navMenuWidth,
            height: sectionHeight,
          })
        );
      }, 400);
    };
    handleRowContainerWidth();

    window.addEventListener("resize", handleRowContainerWidth);

    return () => {
      if (handlerTimeout.current) clearTimeout(handlerTimeout.current);
      window.removeEventListener("resize", handleRowContainerWidth);
    };
  }, [navMenu]);

  return null;
}
export default Client;
