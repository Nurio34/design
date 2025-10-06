import Image from "next/image";
import { useAnimalSliderContext } from "../../Context";
import { useEffect, useState } from "react";

function ImagePreview() {
  const { images, currentIndex } = useAnimalSliderContext();

  const { description, rg } =
    images[currentIndex - 1 >= 0 ? currentIndex - 1 : images.length - 1];

  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsRender(true);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    isRender && (
      <figure className="h-full relative -z-20 ">
        <Image
          src={rg.src}
          alt={description}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </figure>
    )
  );
}
export default ImagePreview;
