import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import Image from "next/image";
import { usePhotoContainer } from "./_hooks/usePhotoContainer";
import { useAsymmetricPhotoGalleryContext } from "../../Context";
import { usePhoto } from "./_hooks/usePhoto";
import { useDivStyle } from "./_hooks/useDivStyle";

function Photo({ image, index }: { image: UnsplashPhoto; index: number }) {
  const { width, height, urls, alt_description, description } = image;
  const ratio = width / height;

  const { selectedPhotoIndex } = useAsymmetricPhotoGalleryContext();
  const isSelected = selectedPhotoIndex === index + 1;

  const { PhotoContainerRef, photoContainerSize } = usePhotoContainer();

  const {
    PhotoRef,
    isImageLoaded,
    setIsImageLoaded,
    handlePhotoClick,
    handlePhotoPosition,
  } = usePhoto(index, isSelected);

  const { divStyle } = useDivStyle(isSelected, photoContainerSize, ratio);

  return (
    <>
      <li
        ref={PhotoContainerRef}
        className={`Photo ${isImageLoaded ? "" : "bg-black/30 animate-pulse"}`}
        style={{
          gridColumn: ratio > 1.2 ? "span 2" : undefined,
          gridRow: ratio < 0.8 ? "span 2" : undefined,
        }}
      >
        <div
          ref={PhotoRef}
          className={`${isSelected ? "transition-all duration-[400ms]" : ""}`}
          style={divStyle}
          onClick={handlePhotoClick}
          onMouseMove={handlePhotoPosition}
        >
          <figure className="relative w-full h-full select-none">
            <Image
              src={urls.regular}
              alt={alt_description || description || "description"}
              fill
              sizes="735px"
              priority={index === 0}
              className="object-cover"
              draggable={false}
              onLoad={() => setIsImageLoaded(true)}
            />
          </figure>
          {isSelected && (
            <>
              <style>
                {`
               @keyframes opak {
                 from {
                   opacity: 0;
                 }
                 to {
                   opacity: 1;
                 }
               }
               .animate-opak {
                 animation: opak 1s ease-in-out;
               }
             `}
              </style>
              <div
                className="fixed bg-black/90 top-0 left-0 w-full h-full -z-[10]"
                style={{ animation: "opak 400ms forwards" }}
              />
            </>
          )}
        </div>
      </li>
    </>
  );
}
export default Photo;
