import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import Image from "next/image";
import { usePhoto } from "./_hooks/usePhoto";
import { useImageState } from "./_hooks/useImageState";
import { useCurrentState } from "./_hooks/useCurrentState";
import { useImageLibraryContext } from "../../../Context";

function Photo({ image, index }: { image: UnsplashPhoto; index: number }) {
  const { containerState } = useImageLibraryContext();

  const {
    urls,
    description,
    book_cover,
    short_desc,
    alt_description,
    width,
    height,
  } = useImageState(image);

  const { PhotorRef, photoState } = usePhoto();

  const {
    isCurrent,
    isSelected,
    isImageLoaded,
    setIsImageLoaded,
    handleClick,
  } = useCurrentState(index, photoState);
  console.log({ containerState, width, height });

  return (
    <li
      className={`relative overflow-hidden transition-all duration-[400ms] ${
        isCurrent ? "rounded-4xl" : "rounded-lg "
      }`}
      style={{ flexGrow: isCurrent ? 1 : 0.1 }}
      onClick={handleClick}
    >
      <div
        className={`absolute inset-0 bg-red-500 transition-all duration-[400ms]
            ${isCurrent ? "opacity-100" : "opacity-0"}
        `}
        style={{
          backgroundImage: isImageLoaded ? undefined : `url(${urls.thumb})`,
        }}
      >
        <figure
          ref={PhotorRef}
          className="transition-all w-full h-full"
          style={{
            position: isSelected ? "fixed" : "absolute",
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
        <div className="absolute bottom-0 px-4 pb-4 text-shadow-[0px_0px_15px_black]">
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
        className={`relative bg-black text-white capitalize font-semibold text-xl font-serif h-full transition-all 
                ${
                  isCurrent
                    ? "duration-[0s] opacity-0"
                    : "duration-[400ms] opacity-80"
                }
            `}
        style={{ fontVariant: "small-caps" }}
      >
        <p className="absolute left-1/2 bottom-0 origin-left -rotate-90 min-w-max">
          {book_cover} ...
        </p>
      </div>
    </li>
  );
}
export default Photo;
