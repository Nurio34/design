import { useAnimalSliderContext } from "./Context";
import ImagePreview from "./_components/ImagePreview";
import Info from "./_components/Info";
import ListImage from "./_components/ListImage";
import { useEffect, useRef } from "react";

function Client() {
  const { images, setWrapperState } = useAnimalSliderContext();

  const WrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = WrapperRef.current;

    if (!wrapper || images.length === 0) return;

    const handleWrapperState = () => {
      const { width, height, top } = wrapper.getBoundingClientRect();
      const gapX = (width * 2) / 100;
      const gapY = height / 2 / 100;

      setWrapperState({ width, height, gapX, gapY, top });
    };

    handleWrapperState();

    window.addEventListener("resize", handleWrapperState);

    return () => window.removeEventListener("resize", handleWrapperState);
  }, [images, setWrapperState]);

  if (images.length === 0)
    return (
      <section className="h-full relative bg-black">
        <span
          className="loading loading-ring loading-xl scale-[3] text-white
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        "
        ></span>
      </section>
    );

  return (
    <section ref={WrapperRef} className="relative h-full">
      <ImagePreview />
      <Info />
      <ul className="isolate">
        {images.map((image, index) => (
          <ListImage key={image.id} images={images} index={index} />
        ))}
      </ul>
    </section>
  );
}
export default Client;
