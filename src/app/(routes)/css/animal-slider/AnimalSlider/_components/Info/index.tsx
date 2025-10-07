import { useEffect, useState } from "react";
import { useAnimalSliderContext } from "../../Context";

function Info() {
  const { wrapperState, listImages, images, currentIndex } =
    useAnimalSliderContext();
  const { width: wrapperWidth, height: wrapperHeight } = wrapperState;
  const { width: listImageWidth } = listImages;
  const currentImage = images[currentIndex];
  const { id, description } = currentImage;

  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(false);
  }, [currentIndex]);

  useEffect(() => {
    if (isRender) return;

    const timeoutId = setTimeout(() => setIsRender(true), 1000);

    return () => clearTimeout(timeoutId);
  }, [isRender, currentIndex]);

  return (
    <div
      className="absolute top-1/2 left-10 -translate-y-1/2 space-y-[5vh]"
      style={{
        width: wrapperWidth / 2,
        height: wrapperHeight / 2,
        left: listImageWidth,
        zIndex: 1,
      }}
    >
      <h1
        className="font-extrabold text-7xl text-orange-600 capitalize"
        style={{
          fontVariant: "small-caps",
          transitionDuration: !isRender ? "0s" : "1000ms",
          transform: `translateY(${!isRender ? "-100%" : "0%"})`,
          opacity: !isRender ? 0 : 1,
          zIndex: 1,
        }}
      >
        {id}
      </h1>
      <p
        className=" text-white font-extrabold text-lg"
        style={{
          WebkitTextStroke: "1px black",
          transitionDuration: !isRender ? "0s" : "1000ms",
          transitionDelay: !isRender ? "0s" : "400ms",
          transform: `translateY(${!isRender ? "-50%" : "0%"})`,
          opacity: !isRender ? 0 : 1,
          zIndex: 0,
        }}
      >
        {description}
      </p>
      <div
        className="w-1/2 flex gap-x-[1vw] justify-center"
        style={{
          transitionDuration: !isRender ? "0s" : "1000ms",
          transitionDelay: !isRender ? "0s" : "800ms",
          transform: `translateY(${!isRender ? "-100%" : "0%"})`,
          opacity: !isRender ? 0 : 1,
        }}
      >
        <button type="button" className="grow btn btn-lg btn-primary">
          Details
        </button>
        <button type="button" className="grow btn btn-lg btn-secondary">
          More
        </button>
      </div>
    </div>
  );
}
export default Info;
