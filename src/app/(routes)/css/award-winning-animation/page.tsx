import AwardWinningAnimation from "./AwardWinningAnimation";
import { get20UnsplashPhotos } from "@/app/_actions/unsplash/get20UnsplashPhotos";

async function AwardWinningAnimationPage() {
  const images = await get20UnsplashPhotos();

  return <AwardWinningAnimation images={images} />;
}
export default AwardWinningAnimationPage;
