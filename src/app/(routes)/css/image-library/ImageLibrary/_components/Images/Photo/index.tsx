import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import Image from "next/image";
import { useImageState } from "./_hooks/useImageState";
import { useImageLibraryContext } from "../../../Context";
import { usePhotoContainer } from "./_hooks/usePhotoContainer";
import { usePhoto } from "./_hooks/usePhoto";

function Photo({ image, index }: { image: UnsplashPhoto; index: number }) {
  const { currentIndex, photoContainerState } = useImageLibraryContext();

  const isCurrent = currentIndex === index;

  const { urls, description, book_cover, short_desc, alt_description } =
    useImageState(image);

  const { PhotoContainerRef } = usePhotoContainer(isCurrent);

  const { PhotorRef, isImageLoaded, setIsImageLoaded, handleClick } = usePhoto(
    isCurrent,
    index
  );

  return (
    <li
      ref={PhotoContainerRef}
      className={`overflow-hidden transition-all duration-[400ms]
        grid
        ${isCurrent ? "rounded-4xl" : "rounded-lg"} `}
      style={{ flexGrow: isCurrent ? 1 : 0.1 }}
      onClick={handleClick}
    >
      <div
        className={`row-start-1 col-start-1 transition-all duration-[400ms]
            ${isCurrent ? "opacity-100" : "opacity-0"}
        `}
        style={{
          backgroundImage: isImageLoaded ? undefined : `url(${urls.thumb})`,
        }}
      >
        <figure
          ref={PhotorRef}
          className="fixed rounded-lg overflow-hidden transition-all duration-[400ms]"
          style={{
            // top: isSelected ? 0 : currentPhotoState.top,
            // left: isSelected ? 0 : currentPhotoState.left,
            width: !isCurrent ? 0 : photoContainerState.width,
            height: photoContainerState.height,
            // width: photoContainerState.width,
            // height: photoContainerState.height,
          }}
        >
          <Image
            src={urls.full}
            alt={alt_description || "description"}
            fill
            sizes="500px"
            className="object-cover"
            priority={index === 0}
            onLoad={() => setIsImageLoaded(true)}
          />
        </figure>
        <div
          className="absolute bottom-0 px-4 pb-4 text-shadow-[0px_0px_15px_black]"
          style={{ width: photoContainerState.width }}
        >
          <p
            className="font-bold text-xl capitalize text-white"
            style={{ fontVariant: "small-caps" }}
          >
            {short_desc}
          </p>
          <p className="line-clamp-3 text-white font-semibold ">
            {description || alt_description}
          </p>
        </div>
      </div>
      <div
        className={`relative  row-start-1 col-start-1 bg-black text-white capitalize font-semibold text-xl font-serif h-full transition-all 
                ${
                  isCurrent
                    ? "duration-[0s] opacity-0"
                    : "duration-[400ms] opacity-80"
                }
            `}
        style={{ fontVariant: "small-caps" }}
      >
        <p className="absolute left-1/2 bottom-0 origin-left -rotate-90 min-w-max ">
          {book_cover} ...
        </p>
      </div>
    </li>
  );
}
export default Photo;
