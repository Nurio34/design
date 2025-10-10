import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import Image from "next/image";
import { useImageContainer } from "./_hooks/useImageContainer";

function Photo({
  image,
  index,
  columnCount,
}: {
  image: UnsplashPhoto;
  index: number;
  columnCount: number | undefined;
}) {
  const { width, height, urls, alt_description, description } = image;

  const { ImageContainerRef, imageContainerState, handleClick } =
    useImageContainer(columnCount);

  return (
    <li
      ref={ImageContainerRef}
      className="Photo"
      onClick={handleClick}
      style={{ aspectRatio: width / height }}
    >
      {index}
      <figure className="relative h-full select-none">
        <Image
          src={urls.regular}
          alt={alt_description || description || "description"}
          width={imageContainerState.width - 16}
          height={imageContainerState.height}
          sizes="500px"
          priority={index === 0}
        />
      </figure>
    </li>
  );
}
export default Photo;
