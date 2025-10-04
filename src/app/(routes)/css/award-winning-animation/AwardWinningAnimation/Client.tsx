import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import { useEffect, useState } from "react";
import "./_css/index.css";
import { useLoadingState } from "./_hooks/useLoadingState";
import { useSplitIntoFive } from "./_hooks/useSplitIntoFive";
import ProgressState from "./_components/Progress";
import ImagesContainer from "./_components/ImagesContainer";
import { useAwardWinningAnimationContext } from "./Context";
import Gallery from "./_components/Gallery";

export interface LoadingStateType {
  progress: number;
  isLoading: boolean;
  images: ImageType[];
}

export interface ImageType {
  src: string;
  description: string | null | undefined;
}

function Client({ images }: { images: UnsplashPhoto[] }) {
  const { setIsInitialAnimationEnded, isInitialAnimationEnded } =
    useAwardWinningAnimationContext();

  const [loadingState, setLoadingState] = useState<LoadingStateType>({
    progress: 0,
    isLoading: true,
    images: [],
  });
  const [imageList, setImageList] = useState<ImageType[][]>([]);

  useLoadingState(images, setLoadingState);
  useSplitIntoFive(loadingState, setImageList);

  useEffect(() => {
    if (loadingState.isLoading) return;

    const timeoutId = setTimeout(() => {
      setIsInitialAnimationEnded(true);
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, [loadingState.isLoading, setIsInitialAnimationEnded]);

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
