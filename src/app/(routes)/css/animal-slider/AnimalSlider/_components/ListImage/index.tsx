import Image from "next/image";
import { ImageType, useAnimalSliderContext } from "../../Context";
import { useState } from "react";
import { useRender } from "./_hooks/useRender";

function ListImage({ images, index }: { images: ImageType[]; index: number }) {
  const { listImages, wrapperState, setCurrentIndex, currentIndex } =
    useAnimalSliderContext();
  const {
    width: listImageWidth,
    height: listImageHeight,
    top: listImageTop,
    firsImageLeft,
  } = listImages;
  const {
    gapX,
    top: wrapperTop,
    width: wrapperWidth,
    height: wrapperHeight,
  } = wrapperState;
  const [isRendered, setIsRendered] = useState(false);

  useRender(listImages, wrapperState, setIsRendered);

  const handleClick = () => {
    if (currentIndex === index) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (
    !listImageHeight ||
    !listImageWidth ||
    !top ||
    !firsImageLeft ||
    !gapX ||
    !wrapperWidth ||
    !wrapperHeight ||
    !wrapperTop
  )
    return;

  return (
    <li
      className={`fixed overflow-hidden transition-all select-none
            ${currentIndex !== index ? "rounded-4xl" : ""}
            ${
              currentIndex - index === 1 || currentIndex - index === -4
                ? "duration-[0s]"
                : "duration-[400ms]"
            }
        `}
      style={{
        width: currentIndex === index ? wrapperWidth : listImageWidth,
        height: currentIndex === index ? wrapperHeight : listImageHeight,
        top: currentIndex === index ? wrapperTop : listImageTop,
        left:
          currentIndex === index
            ? 0
            : index < currentIndex
            ? firsImageLeft +
              gapX * (images.length + index - currentIndex - 1) +
              listImageWidth * (images.length + index - currentIndex - 1) +
              listImageWidth / 2
            : firsImageLeft +
              gapX * (index - currentIndex - 1) +
              listImageWidth * (index - currentIndex - 1) +
              listImageWidth / 2,
        transform: `translateY(${
          !isRendered && currentIndex !== index ? 200 : 0
        }px)`,
        // transitionDelay: `${index * 25}ms`,
        transitionTimingFunction: "cubic-bezier(0, 0, 0, 1)",
        zIndex: currentIndex === index ? -10 : 1 - index,
      }}
      onClick={handleClick}
    >
      <Image
        src={images[index % images.length].rg.src}
        alt={images[index % images.length].description}
        fill
        className="object-cover"
        sizes={`${currentIndex === index ? wrapperWidth : listImageWidth}px`}
      />
      {currentIndex !== index && (
        <div
          className="absolute bottom-0 max-w-fit py-4 px-2 text-white"
          style={{ WebkitTextStroke: "1px black" }}
        >
          <p className="font-extrabold text-xl uppercase">{images[index].id}</p>
          <p className="truncate text-base font-extrabold">
            {images[index].description}
          </p>
        </div>
      )}
    </li>
  );
}
export default ListImage;
