import Image from "next/image";
import { ImageType } from "../../../../Client";
import "./_css/index.css";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { PhotoSizeType } from "..";
import { useAwardWinningAnimationContext } from "../../../../Context";

function Photo({
  image,
  columnIndex,
  ind,
  containerHeight,
  setPhotoSize,
  totalImages,
}: {
  image: ImageType;
  columnIndex: number;
  ind: number;
  containerHeight: number | undefined;
  setPhotoSize: Dispatch<SetStateAction<PhotoSizeType>>;
  totalImages: number;
}) {
  const { setMainPhoto } = useAwardWinningAnimationContext();

  const PhotoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const photo = PhotoRef.current;

    if (!photo) return;

    const width = photo.getBoundingClientRect().width;
    const height = photo.getBoundingClientRect().height;
    setPhotoSize({ width, height });
  }, [setPhotoSize]);

  useEffect(() => {
    if (columnIndex === 2 && ind === 2)
      setMainPhoto((prev) => ({
        ...prev,
        image: { src: image.src, description: image.description },
      }));
  }, [columnIndex, ind, image.src, image.description, setMainPhoto]);

  if (!containerHeight || !image.src || !image.description) return;

  return (
    <figure
      ref={PhotoRef}
      className={`relative ${
        columnIndex === 2
          ? `AwardWinningAnimationPhoto_Center`
          : columnIndex === 0 || columnIndex === 4
          ? "AwardWinningAnimationPhoto_Side"
          : "AwardWinningAnimationPhoto_Middle"
      } Photo-${ind}`}
      style={
        {
          "--containerHeight": containerHeight,
          "--delay": columnIndex % 2 === 0 ? ind : totalImages - ind - 1,
        } as React.CSSProperties
      }
    >
      <Image
        src={image.src}
        alt={image.description || "image"}
        fill
        className="object-fill"
        priority
        sizes="(max-width: 375px) 100vw, 100px"
      />
    </figure>
  );
}
export default Photo;
