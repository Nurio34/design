import { useImageLibraryContext } from "../../Context";
import Photo from "./Photo";

function Images() {
  const { images } = useImageLibraryContext();

  return (
    <ul className="overflow-hidden flex gap-x-[0.5vw]">
      {images.map((image, index) => (
        <Photo key={image.id} image={image} index={index} />
      ))}
    </ul>
  );
}
export default Images;
