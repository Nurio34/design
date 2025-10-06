import { useAwardWinningAnimationContext } from "../../../../Context";
import "./_css/index.css";
import { Dispatch, SetStateAction } from "react";
import { BigListMoveType } from "../..";
import SmallImage from "./SmallImage";

function ImageList({
  bigListMove,
  setBigListMove,
}: {
  bigListMove: BigListMoveType;
  setBigListMove: Dispatch<SetStateAction<BigListMoveType>>;
}) {
  const { eightImage } = useAwardWinningAnimationContext();

  return (
    <ul className="absolute bottom-10 right-10 z-10 flex gap-x-2">
      {eightImage.map((image, index) => (
        <SmallImage
          key={`${image.src}+${index}`}
          image={image}
          index={index}
          bigListMove={bigListMove}
          setBigListMove={setBigListMove}
        />
      ))}
    </ul>
  );
}
export default ImageList;
