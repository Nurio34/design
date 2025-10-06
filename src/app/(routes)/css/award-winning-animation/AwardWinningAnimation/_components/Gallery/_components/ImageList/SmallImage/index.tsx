import Image from "next/image";
import { BigListMoveType } from "../../..";
import { ImageType } from "../../../../../Client";
import { useAwardWinningAnimationContext } from "../../../../../Context";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useSmallImagePosition } from "./_hooks/useSmallImagePosition";
import { useTranslateY } from "./_hooks/useTranslateY";

function SmallImage({
  image,
  index,
  bigListMove,
  setBigListMove,
}: {
  image: ImageType;
  index: number;
  bigListMove: BigListMoveType;
  setBigListMove: Dispatch<SetStateAction<BigListMoveType>>;
}) {
  const { isInBigListMode } = bigListMove;

  const {
    imagePlaceholdersPosition,
    smallImagesPosition,
    isLastImageAnimationEnded,
    setIsLastImageAnimationEnded,
  } = useAwardWinningAnimationContext();

  const SmallImageRef = useRef<HTMLLIElement | null>(null);
  const [translateY, setTranslateY] = useState(0);

  useSmallImagePosition(SmallImageRef, index);
  useTranslateY(setTranslateY, isInBigListMode);

  if (!image.src || !image.description)
    return <li className="w-16 aspect-video bg-black/30 animate-pulse" />;
  return (
    <li
      ref={SmallImageRef}
      className="AwardWinningAnimation_Gallery_ImageList_Image w-16 aspect-video transition-all duration-500"
      style={
        {
          "--index": index,
          "--translateY": translateY,
          transform: "translateY(100px)",
          position: isLastImageAnimationEnded ? "fixed" : "relative",
          top: isInBigListMode
            ? imagePlaceholdersPosition[index].top
            : isLastImageAnimationEnded
            ? smallImagesPosition[index].top
            : undefined,
          left: isInBigListMode
            ? imagePlaceholdersPosition[index].left
            : isLastImageAnimationEnded
            ? smallImagesPosition[index].left
            : undefined,
          width: isInBigListMode
            ? imagePlaceholdersPosition[index]?.width
            : smallImagesPosition[index]?.width,
          height: isInBigListMode
            ? imagePlaceholdersPosition[index]?.height
            : smallImagesPosition[index]?.height,
        } as React.CSSProperties
      }
      onClick={() =>
        setBigListMove((prev) => ({ ...prev, isInBigListMode: false }))
      }
      onAnimationEnd={() => {
        if (index === 7) setIsLastImageAnimationEnded(true);
      }}
    >
      <figure className="relative w-full h-full">
        <Image
          src={image.src}
          alt={image.description}
          fill
          className="object-fill"
          sizes="64px"
          priority={index === 0}
        />
      </figure>
    </li>
  );
}
export default SmallImage;
