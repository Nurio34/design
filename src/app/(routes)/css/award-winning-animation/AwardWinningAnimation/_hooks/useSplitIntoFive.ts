import { Dispatch, SetStateAction, useEffect } from "react";
import { ImageType, LoadingStateType } from "../Client";

export const useSplitIntoFive = (
  loadingState: LoadingStateType,
  setImageList: Dispatch<SetStateAction<ImageType[][]>>
) => {
  useEffect(() => {
    if (loadingState.isLoading) return;

    function splitIntoFive(arr: ImageType[]) {
      const result = [];
      const chunkSize = Math.ceil(arr.length / 5);

      for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
      }
      setImageList(result);
    }

    splitIntoFive(loadingState.images);
  }, [loadingState.isLoading, loadingState.images, setImageList]);
};
