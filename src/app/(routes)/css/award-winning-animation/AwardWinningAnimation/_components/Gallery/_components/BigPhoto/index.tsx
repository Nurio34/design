import Image from "next/image";
import {
  MainPhotoType,
  useAwardWinningAnimationContext,
} from "../../../../Context";
import { ImageType } from "../../../../Client";
import { BigListMoveType } from "../..";
import { useRef, useState } from "react";

function BigPhoto({
  bigPhoto,
  bigPhotoIndex,
  bigListMove,
}: {
  bigPhoto: ImageType | undefined;
  bigPhotoIndex: number;
  bigListMove: BigListMoveType;
}) {
  const { isInBigListMode } = bigListMove;

  const { isInitialAnimationEnded, mainPhoto, imagePlaceholdersPosition } =
    useAwardWinningAnimationContext();

  const BigPhotoRef = useRef<HTMLDivElement | null>(null);
  const [mainPhotoStrecthed, setMainPhotoStrecthed] = useState<MainPhotoType>({
    width: mainPhoto.width,
    height: mainPhoto.height,
    image: mainPhoto.image,
  });

  return (
    <figure
      ref={BigPhotoRef}
      className={`AwardWinningAnimation_Gallery_MainPhoto transition-all duration-500
                ${isInitialAnimationEnded ? "" : "opacity-0"}
            `}
      style={
        {
          "--width": isInBigListMode
            ? imagePlaceholdersPosition[0].width
            : mainPhotoStrecthed.width || mainPhoto.width,
          "--height": isInBigListMode
            ? imagePlaceholdersPosition[0].height
            : mainPhotoStrecthed.height || mainPhoto.height,
          position: isInBigListMode ? "fixed" : "absolute",
          top: isInBigListMode
            ? imagePlaceholdersPosition[bigPhotoIndex].top
            : "50%",
          left: isInBigListMode
            ? imagePlaceholdersPosition[bigPhotoIndex].left
            : "50%",
          transform: `translate(${isInBigListMode ? 0 : "-50%"},${
            isInBigListMode ? 0 : "-50%"
          })`,
        } as React.CSSProperties
      }
      onAnimationEnd={() => {
        const mainPhoto = BigPhotoRef.current;

        if (!mainPhoto) return;

        const { width, height } = mainPhoto.getBoundingClientRect();
        setMainPhotoStrecthed((prev) => ({ ...prev, width, height }));
      }}
    >
      {bigPhoto?.src && (
        <Image
          src={bigPhoto.src}
          alt={bigPhoto.description || "image"}
          fill
          priority
          className="object-fill"
        />
      )}
    </figure>
  );
}
export default BigPhoto;
