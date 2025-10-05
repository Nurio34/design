import { Dispatch, SetStateAction, useRef } from "react";
import { useAwardWinningAnimationContext } from "../../../../Context";
import { BigListMoveType } from "../..";
import { useBigImageListWidth } from "./_hooks/useBigImageListWidth";
import ImagePlaceholder from "./ImagePlaceholder";

function BigImageList({
  bigListMove,
  setBigImageListWidth,
}: {
  bigListMove: BigListMoveType;
  setBigImageListWidth: Dispatch<SetStateAction<number>>;
}) {
  const { moveX } = bigListMove;

  const { eightImage, imagePlaceholderWidth } =
    useAwardWinningAnimationContext();

  const BigImageListRef = useRef<HTMLUListElement | null>(null);

  useBigImageListWidth(BigImageListRef, setBigImageListWidth);

  return (
    <ul
      ref={BigImageListRef}
      className="absolute h-1/2 top-1/2 left-1/2 -translate-y-1/2 border-2 border-red-500
        flex gap-x-[2vw] transition-transform duration-[400ms]
      "
      style={{
        transform: `translateX(-${imagePlaceholderWidth / 2 + moveX}px)`,
      }}
    >
      {eightImage.map((image, index) => (
        <ImagePlaceholder key={image.src} index={index} />
      ))}
    </ul>
  );
}
export default BigImageList;
