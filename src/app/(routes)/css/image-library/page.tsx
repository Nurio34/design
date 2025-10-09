import { getPhotosByCategory } from "@/app/_actions/unsplash/getPhotosByCategory";
import ImageLibrary from "./ImageLibrary";

async function ImageLibraryPage() {
  const images = await getPhotosByCategory("aerial", 10);

  return <ImageLibrary images={images} />;
}
export default ImageLibraryPage;
