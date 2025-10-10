import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import "./_css/index.css";
import Photo from "./_components/Photo";
import { useColumnCount } from "./_hooks/useColumnCount";

function Client({ images }: { images: UnsplashPhoto[] }) {
  const { columnCount } = useColumnCount();

  return (
    <section className="AsymmetricPhotoGallery h-full py-[5vh] px-[5vw]">
      <ul className="Container h-full" style={{ columnCount: columnCount }}>
        {images.map((image, index) => (
          <Photo
            key={image.id}
            image={image}
            index={index}
            columnCount={columnCount}
          />
        ))}
      </ul>
    </section>
  );
}
export default Client;
