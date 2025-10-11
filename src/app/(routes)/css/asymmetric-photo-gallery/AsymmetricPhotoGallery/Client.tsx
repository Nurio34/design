import "./_css/index.css";
import Photo from "./_components/Photo";
import { useGridStyle } from "./_hooks/useGridStyle";
import { useEffect, useRef } from "react";
import { useAsymmetricPhotoGalleryContext } from "./Context";
import MoreButton from "./_components/MoreButton";
import { categories } from "@/app/_actions/unsplash/_type";

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
  console.log(categories);

  return (
    <section
      ref={SectionRef}
      className="AsymmetricPhotoGallery h-full py-[5vh] px-[5vw] text-center"
    >
      {/* {
        <div
          className="overflow-x-scroll flex-wrap"
          style={{
            maxWidth: "100vw",
          }}
        >
          <ul className="flex gap-x-1">
            {categories.map((category) => (
              <li className="btn btn-sm btn-secondary">{category}</li>
            ))}
          </ul>
        </div>
      } */}
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
