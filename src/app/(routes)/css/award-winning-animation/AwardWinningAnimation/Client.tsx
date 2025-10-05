import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import { useState } from "react";
import "./_css/index.css";
import { useLoadingState } from "./_hooks/useLoadingState";
import { useSplitIntoFive } from "./_hooks/useSplitIntoFive";
import ProgressState from "./_components/Progress";
import ImagesContainer from "./_components/ImagesContainer";
import { useAwardWinningAnimationContext } from "./Context";
import Gallery from "./_components/Gallery";
import { useInitialAnimation } from "./_hooks/useInitialAnimation";
import { useEightImage } from "./_hooks/useEightImage";

export interface LoadingStateType {
  progress: number;
  isLoading: boolean;
  images: ImageType[];
}

export interface ImageType {
  src: string | undefined;
  description: string | null | undefined;
}

function Client({ images }: { images: UnsplashPhoto[] }) {
  const { isInitialAnimationEnded } = useAwardWinningAnimationContext();

  const [loadingState, setLoadingState] = useState<LoadingStateType>({
    progress: 0,
    isLoading: true,
    images: [],
  });
  const [imageList, setImageList] = useState<ImageType[][]>([]);

  useLoadingState(images, setLoadingState);
  useSplitIntoFive(loadingState, setImageList);
  useInitialAnimation(loadingState.isLoading);
  useEightImage(imageList);

  return (
    <section
      className="relative overflow-hidden h-full bg-black/90"
      id="AwardWinningAnimation"
    >
      {!isInitialAnimationEnded && (
        <ProgressState progress={loadingState.progress} />
      )}
      {!isInitialAnimationEnded && <ImagesContainer imageList={imageList} />}
      <Gallery />
    </section>
  );
}
export default Client;
