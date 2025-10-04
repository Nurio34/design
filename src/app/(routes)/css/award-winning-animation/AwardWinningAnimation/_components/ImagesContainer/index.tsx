import { ImageType } from "../../Client";
import { useEffect, useRef, useState } from "react";
import Column from "./Column";

function ImagesContainer({ imageList }: { imageList: ImageType[][] }) {
  const ContainerRef = useRef<HTMLUListElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const container = ContainerRef.current;

    if (!container) return;

    const height = container.getBoundingClientRect().height;
    setContainerHeight(height);
  }, []);

  return (
    <ul
      className="AwardWinningAnimationColumnContainer w-[110%] h-full flex gap-x-[5vw]
        absolute top-0 left-1/2 -translate-x-1/2
        "
      ref={ContainerRef}
    >
      {imageList.map((column, index) => (
        <Column
          key={column[0].src}
          column={column}
          index={index}
          containerHeight={containerHeight}
        />
      ))}
    </ul>
  );
}
export default ImagesContainer;
