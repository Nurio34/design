import { ImageType } from "../../../Client";
import Photo from "./Photo";
import { useEffect, useState } from "react";
import { useAwardWinningAnimationContext } from "../../../Context";

export interface PhotoSizeType {
  width: number | undefined;
  height: number | undefined;
}

function Column({
  column,
  index,
  containerHeight,
}: {
  column: ImageType[];
  index: number;
  containerHeight: number | undefined;
}) {
  const { setMainPhoto } = useAwardWinningAnimationContext();

  const [photoSize, setPhotoSize] = useState<PhotoSizeType>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    setMainPhoto((prev) => ({
      ...prev,
      width: !photoSize.width ? undefined : photoSize.width * 5.5,
      height: !photoSize.height ? undefined : photoSize.height * 4.5,
    }));
  }, [photoSize, setMainPhoto]);

  return (
    <li
      key={index}
      className={`AwardWinningAnimationColumn
        ${
          index === 2
            ? "AwardWinningAnimationColumn_Center"
            : index === 0 || index === 4
            ? "AwardWinningAnimationColumn_Side"
            : "AwardWinningAnimationColumn_Middle"
        } w-full grid gap-y-[5vh]`}
      style={
        {
          transform:
            index === 0 || index === 4
              ? `translateY(${photoSize.height! * 2}px)`
              : index === 1 || index === 3
              ? `translateY(${photoSize.height! * -2}px)`
              : "",
          "--photoHeight": photoSize.height,
          "--containerHeight": containerHeight,
        } as React.CSSProperties
      }
    >
      {column.map((image, ind) => (
        <Photo
          key={image.src}
          image={image}
          columnIndex={index}
          ind={ind}
          containerHeight={containerHeight}
          setPhotoSize={setPhotoSize}
          totalImages={column.length}
        />
      ))}
    </li>
  );
}
export default Column;
