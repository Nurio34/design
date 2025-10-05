"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import { ImageType } from "./Client";

interface MainPhotoType {
  image: ImageType;
  width: number | undefined;
  height: number | undefined;
}

interface ContextType {
  mainPhoto: MainPhotoType;
  setMainPhoto: Dispatch<SetStateAction<MainPhotoType>>;
  isInitialAnimationEnded: boolean;
  setIsInitialAnimationEnded: Dispatch<SetStateAction<boolean>>;
  eightImage: ImageType[];
  setEightImage: Dispatch<SetStateAction<ImageType[]>>;
  imagePlaceholderWidth: number;
  setImagePlaceholderWidth: Dispatch<SetStateAction<number>>;
  ImagePlaceholdersRef: RefObject<HTMLLIElement[]>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const AwardWinningAnimationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mainPhoto, setMainPhoto] = useState<MainPhotoType>({
    image: {
      src: undefined,
      description: undefined,
    },
    width: undefined,
    height: undefined,
  });
  const [isInitialAnimationEnded, setIsInitialAnimationEnded] = useState(false);
  const [eightImage, setEightImage] = useState<ImageType[]>([]);
  const [imagePlaceholderWidth, setImagePlaceholderWidth] = useState(0);
  const ImagePlaceholdersRef = useRef<HTMLLIElement[]>([]);

  ImagePlaceholdersRef.current.forEach((placeholder) => {
    const rect = placeholder.getBoundingClientRect();
    console.log(rect);
  });

  return (
    <Context.Provider
      value={{
        mainPhoto,
        setMainPhoto,
        isInitialAnimationEnded,
        setIsInitialAnimationEnded,
        eightImage,
        setEightImage,
        imagePlaceholderWidth,
        setImagePlaceholderWidth,
        ImagePlaceholdersRef,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAwardWinningAnimationContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useCountContext must be used within a Provider");
  return context;
};
