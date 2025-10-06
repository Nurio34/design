import { useAwardWinningAnimationContext } from "../../Context";
import "./_css/index.css";
import Title from "./_components/Title";
import { useEffect, useState } from "react";
import { ImageType } from "../../Client";
import BigPhoto from "./_components/BigPhoto";
import ImageList from "./_components/ImageList";
import { useInitialBigPhoto } from "./_hooks/useInitialBigPhoto";
import { useWheelMove } from "./_hooks/useWheelMove";
import BigImageList from "./_components/BigImageList";

export interface BigListMoveType {
  isInBigListMode: boolean;
  isMoving: boolean;
  moveX: number;
}

function Gallery() {
  const { isInitialAnimationEnded } = useAwardWinningAnimationContext();

  const [bigPhoto, setBigPhoto] = useState<ImageType | undefined>(undefined);
  const [bigPhotoIndex, setBigPhotoIndex] = useState(0);
  const [bigListMove, setBigListMove] = useState<BigListMoveType>({
    isInBigListMode: false,
    isMoving: false,
    moveX: 0,
  });
  const [bigImageListWidth, setBigImageListWidth] = useState(0);

  useInitialBigPhoto(setBigPhoto);
  useWheelMove(bigListMove, setBigListMove, bigImageListWidth);

  //! Eslint
  useEffect(() => {
    setBigPhotoIndex(0);
  }, []);
  //!

  return (
    <section className="relative h-full">
      <BigPhoto
        bigPhoto={bigPhoto}
        bigPhotoIndex={bigPhotoIndex}
        bigListMove={bigListMove}
      />
      {isInitialAnimationEnded && <Title />}
      {isInitialAnimationEnded && (
        <ImageList bigListMove={bigListMove} setBigListMove={setBigListMove} />
      )}
      {isInitialAnimationEnded && (
        <BigImageList
          bigListMove={bigListMove}
          setBigImageListWidth={setBigImageListWidth}
        />
      )}
    </section>
  );
}
export default Gallery;
