import { useImages } from "./_hooks/useImages";
import Column from "./_components/Column";
import Row from "./_components/Row";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useRef, useState } from "react";

function Client() {
  const { maxColumnHeight, navMenu } = useAppSelector((s) => s.modals);
  const { columns } = useImages();

  const [rowContainerWidth, setRowContainerWidth] = useState<
    number | undefined
  >(undefined);
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
        setRowContainerWidth(bodyWidth - navMenuWidth);
      }, 400);
    };
    handleRowContainerWidth();

    window.addEventListener("resize", handleRowContainerWidth);

    return () => {
      if (handlerTimeout.current) clearTimeout(handlerTimeout.current);
      window.removeEventListener("resize", handleRowContainerWidth);
    };
  }, [navMenu]);

  return (
    <section className="h-full">
      <div
        className="h-full grid grid-cols-3 gap-x-[5vw] px-[10vw]"
        style={{
          maxHeight: maxColumnHeight === 0 ? undefined : maxColumnHeight,
        }}
      >
        {columns.map((column, index) => (
          <Column key={index} column={column} index={index} />
        ))}
      </div>
      <div
        className="absolute h-full flex flex-col justify-center gap-y-[5vh] overflow-x-hidden"
        style={{ maxWidth: rowContainerWidth }}
      >
        {columns.map((column, index) => (
          <Row key={index} column={column} index={index} />
        ))}
      </div>
    </section>
  );
}
export default Client;
