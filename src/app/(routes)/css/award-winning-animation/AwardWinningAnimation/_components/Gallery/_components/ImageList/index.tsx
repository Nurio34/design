import Image from "next/image";
import { useAwardWinningAnimationContext } from "../../../../Context";
import "./_css/index.css";
import { Dispatch, SetStateAction } from "react";

function ImageList({
  bigPhotoIndex,
  setBigPhotoIndex,
}: {
  bigPhotoIndex: number;
  setBigPhotoIndex: Dispatch<SetStateAction<number>>;
}) {
  const { eightImage } = useAwardWinningAnimationContext();

  //! Eslint log
  // console.log({ bigPhotoIndex, setBigPhotoIndex });

  return (
    <ul className="absolute bottom-10 right-10 z-10 flex gap-x-2">
      {eightImage.map((image, index) => {
        if (!image.src || !image.description)
          return (
            <li
              key={index}
              className="w-16 aspect-video bg-black/30 animate-pulse"
            />
          );
        return (
          <li
            key={image.src}
            className="AwardWinningAnimation_Gallery_ImageList_Image w-16 aspect-video translate-y-28"
            style={{ "--index": index } as React.CSSProperties}
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
      })}
    </ul>
  );
}
export default ImageList;
