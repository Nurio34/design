import "./_css/index.css";

import Image from "next/image";
import { ImageType } from "../../_hooks/useImages";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setMaxColumnHeight } from "@/store/slices/modal";

function Column({ column, index }: { column: ImageType[]; index: number }) {
  const [columnState, setColumnState] = useState<ImageType[]>([]);

  const ContainerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  const ColumnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState<number | null>(null);
  const [isColumnHeightCalculated, setIsColumnHeightCalculated] =
    useState(false);

  const rowGap = "10vh";

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!ContainerRef.current) return;
    setContainerHeight(ContainerRef.current.getBoundingClientRect().height);
  }, []);

  useEffect(() => {
    if (!containerHeight) return;
    dispatch(setMaxColumnHeight(containerHeight));
    setColumnState(column);
  }, [containerHeight]);

  useEffect(() => {
    if (!ColumnRef.current) return;
    if (columnState.length === 0) return;
    if (isColumnHeightCalculated) return;

    setColumnHeight(ColumnRef.current.getBoundingClientRect().height);
    setIsColumnHeightCalculated(true);
  }, [columnState, isColumnHeightCalculated]);

  useEffect(() => {
    if (!columnHeight) return;
    setColumnState((prev) => [...prev, ...prev]);
  }, [columnHeight]);

  return (
    <div
      ref={ContainerRef}
      className="overflow-hidden"
      style={{ maxHeight: containerHeight ? containerHeight : undefined }}
    >
      <div
        ref={ColumnRef}
        className={`${index === 1 ? "Column_Reverse_Slide" : "Column_Slide"}`}
        style={
          {
            "--h": columnHeight,
            "--rg": rowGap,
          } as React.CSSProperties
        }
      >
        {columnState.map((image, ind) => (
          <figure
            key={ind}
            className="relative w-full bg-primary"
            style={{
              aspectRatio: image.ratio,
              marginBlock: rowGap,
            }}
          >
            <Image src={image.url} fill alt="alt" priority sizes="30vw" />
          </figure>
        ))}
      </div>
    </div>
  );
}
export default Column;
