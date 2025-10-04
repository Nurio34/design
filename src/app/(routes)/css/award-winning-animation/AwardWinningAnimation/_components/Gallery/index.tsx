import Image from "next/image";
import { useAwardWinningAnimationContext } from "../../Context";
import "./_css/index.css";
import Title from "./_components/Title";

function Gallery() {
  const { isInitialAnimationEnded, mainPhoto } =
    useAwardWinningAnimationContext();

  return (
    <section className="relative h-full">
      <figure
        className={`AwardWinningAnimation_Gallery_MainPhoto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                ${isInitialAnimationEnded ? "" : "opacity-0"}
            `}
        style={{
          width: mainPhoto.width,
          height: mainPhoto.height,
        }}
      >
        {mainPhoto.image.src && (
          <Image
            src={mainPhoto.image.src}
            alt={mainPhoto.image.description || "image"}
            fill
            priority
            className="object-fill"
          />
        )}
      </figure>
      {isInitialAnimationEnded && <Title />}
    </section>
  );
}
export default Gallery;
