import Image from "next/image";
import { ImageType } from "../../_hooks/useImages";
import { useEffect, useRef, useState } from "react";
import "./_css/index.css";

function Row({ column, index }: { column: ImageType[]; index: number }) {
  const RowRef = useRef<HTMLDivElement | null>(null);
  const [rowWidth, setRowlWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      if (!RowRef.current) return;
      setRowlWidth(RowRef.current.scrollWidth / 2);
    }, 400);
  }, []);

  return (
    <div
      ref={RowRef}
      className={`h-[20vh] flex gap-x-[5vw]
        ${index === 1 ? "Row_Slide_Reverse" : "Row_Slide "}  
      `}
      style={
        {
          "--w": rowWidth,
        } as React.CSSProperties
      }
    >
      {[...column, ...column].map((image, ind) => (
        <figure
          key={ind}
          className="h-full relative"
          style={{ aspectRatio: image.ratio }}
        >
          <Image src={image.url} fill alt="alt" priority sizes="20vw" />
        </figure>
      ))}
    </div>
  );
}
export default Row;
