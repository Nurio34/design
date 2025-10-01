import AwardWinningAnimation from "./AwardWinningAnimation";
import { getUnsplashPhotos } from "./AwardWinningAnimation/_actions/getUnsplashPhotos";

async function AwardWinningAnimationPage() {
  const images = await getUnsplashPhotos();

  return <AwardWinningAnimation images={images} />;
}
export default AwardWinningAnimationPage;
