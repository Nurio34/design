import { categories } from "@/app/_actions/unsplash/_type";
import AsymmetricPhotoGallery from "./AsymmetricPhotoGallery";
import { getPhotosByCategoryAmount } from "@/app/_actions/unsplash/getPhotosByCategoryAmount";

async function AsymmetricPhotoGalleryPage() {
  const images = await getPhotosByCategoryAmount(categories[0], 1, 30);

  return <AsymmetricPhotoGallery images={images} />;
}
export default AsymmetricPhotoGalleryPage;
