import "./_css/index.css";
import Photo from "./_components/Photo";
import { useGridStyle } from "./_hooks/useGridStyle";
import { useEffect, useRef } from "react";
import { useAsymmetricPhotoGalleryContext } from "./Context";
import MoreButton from "./_components/MoreButton";
import { categories } from "@/app/_actions/unsplash/_type";
import CategoryButton from "./_components/CategoryButton";

function Client() {
  const { imagesState, setScreenSize } = useAsymmetricPhotoGalleryContext();

  const { gridStyle } = useGridStyle(imagesState);

  const SectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const section = SectionRef.current;
    if (!section) return;

    const handleScreenSize = () => {
      const { width } = section.getBoundingClientRect();
      setScreenSize({ width: width - 32, height: window.innerHeight - 32 });
    };

    handleScreenSize();

    window.addEventListener("resize", handleScreenSize);

    return () => window.removeEventListener("resize", handleScreenSize);
  }, [setScreenSize]);

  return (
    <section
      ref={SectionRef}
      className="AsymmetricPhotoGallery h-full pt-[5vh] px-[5vw] text-center"
      style={{ maxWidth: "calc(100vw - 16px)" }}
    >
      <div
        className="max-w-full overflow-x-auto mb-4 pb-1 flex-wrap"
        style={{ scrollbarWidth: "thin" }}
      >
        <ul className="flex  gap-x-1">
          {categories.map((category) => (
            <CategoryButton key={category} category={category} />
          ))}
        </ul>
      </div>
      <ul className="Container h-full" style={gridStyle}>
        {imagesState.map((image, index) => (
          <Photo key={image.id} image={image} index={index} />
        ))}
      </ul>
      <MoreButton />
    </section>
  );
}
export default Client;
