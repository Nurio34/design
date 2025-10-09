import { getPhotosByCategory } from "@/app/_actions/unsplash/getPhotosByCategory";
import AwardWinningAnimation from "./AwardWinningAnimation";

async function AwardWinningAnimationPage() {
  const images = await getPhotosByCategory("nature", 20);

  return <AwardWinningAnimation images={images} />;
}
export default AwardWinningAnimationPage;
