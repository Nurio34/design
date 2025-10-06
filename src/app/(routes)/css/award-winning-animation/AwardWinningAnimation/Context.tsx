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

export interface MainPhotoType {
  image: ImageType;
  width: number | undefined;
  height: number | undefined;
}

interface ImagePlaceholderPositionType {
  index: number;
  top: number;
  left: number;
  width: number;
  height: number;
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
  imagePlaceholdersPosition: ImagePlaceholderPositionType[];
  setImagePlaceholdersPosition: Dispatch<
    SetStateAction<ImagePlaceholderPositionType[]>
  >;
  smallImagesPosition: ImagePlaceholderPositionType[];
  setSmallImagesPosition: Dispatch<
    SetStateAction<ImagePlaceholderPositionType[]>
  >;
  isLastImageAnimationEnded: boolean;
  setIsLastImageAnimationEnded: Dispatch<SetStateAction<boolean>>;
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
  const [imagePlaceholdersPosition, setImagePlaceholdersPosition] = useState<
    ImagePlaceholderPositionType[]
  >([]);
  const [smallImagesPosition, setSmallImagesPosition] = useState<
    ImagePlaceholderPositionType[]
  >([]);
  const [isLastImageAnimationEnded, setIsLastImageAnimationEnded] =
    useState(false);

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
        imagePlaceholdersPosition,
        setImagePlaceholdersPosition,
        smallImagesPosition,
        setSmallImagesPosition,
        isLastImageAnimationEnded,
        setIsLastImageAnimationEnded,
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
