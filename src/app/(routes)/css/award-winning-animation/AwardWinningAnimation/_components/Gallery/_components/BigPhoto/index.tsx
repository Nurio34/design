import Image from "next/image";
import { useAwardWinningAnimationContext } from "../../../../Context";
import { ImageType } from "../../../../Client";

function BigPhoto({
  bigPhoto,
  bigPhotoIndex,
}: {
  bigPhoto: ImageType | undefined;
  bigPhotoIndex: number;
}) {
  const { isInitialAnimationEnded, mainPhoto } =
    useAwardWinningAnimationContext();

  //! Eslint log
  // console.log({ bigPhotoIndex });

  return (
    <figure
      className={`AwardWinningAnimation_Gallery_MainPhoto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                ${isInitialAnimationEnded ? "" : "opacity-0"}
            `}
      style={{
        width: mainPhoto.width,
        height: mainPhoto.height,
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
