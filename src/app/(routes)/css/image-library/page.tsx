import { getPhotosByCategoryOrientationAmount } from "@/app/_actions/unsplash/getPhotosByCategoryOrientationAmount";
import ImageLibrary from "./ImageLibrary";

async function ImageLibraryPage() {
  const images = await getPhotosByCategoryOrientationAmount(
    "aerial",
    "landscape",
    10
  );

  return <ImageLibrary images={images} />;
}
export default ImageLibraryPage;
