import AsymmetricPhotoGallery from "./AsymmetricPhotoGallery";
import { getPhotosByCategoryAmount } from "@/app/_actions/unsplash/getPhotosByCategoryAmount";

async function AsymmetricPhotoGalleryPage() {
  const images = await getPhotosByCategoryAmount("abstract", 1, 30);

  return <AsymmetricPhotoGallery images={images} />;
}
export default AsymmetricPhotoGalleryPage;
