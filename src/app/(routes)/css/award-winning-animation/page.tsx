import { getPhotosByCategoryOrientationAmount } from "@/app/_actions/unsplash/getPhotosByCategoryOrientationAmount";
import AwardWinningAnimation from "./AwardWinningAnimation";

async function AwardWinningAnimationPage() {
  const images = await getPhotosByCategoryOrientationAmount(
    "nature",
    "landscape",
    20
  );

  return <AwardWinningAnimation images={images} />;
}
export default AwardWinningAnimationPage;
