"use client";

import { usePreventScroll } from "@/app/_hooks/usePreventScroll";
import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface CurrentPhotoType {
  top: number;
  left: number;
}

interface ScreenSize {
  width: number;
  height: number;
}

interface ContextType {
  imagesState: UnsplashPhoto[];
  setImagesState: Dispatch<SetStateAction<UnsplashPhoto[]>>;
  currentPhotoPosition: CurrentPhotoType;
  setCurrentPhotoPosition: Dispatch<SetStateAction<CurrentPhotoType>>;
  selectedPhotoIndex: number | undefined;
  setSelectedPhotoIndex: Dispatch<SetStateAction<number | undefined>>;
  screenSize: ScreenSize;
  setScreenSize: Dispatch<SetStateAction<ScreenSize>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const AsymmetricPhotoGalleryProvider = ({
  children,
  images,
}: {
  children: ReactNode;
  images: UnsplashPhoto[];
}) => {
  const [imagesState, setImagesState] = useState<UnsplashPhoto[]>(images);

  const [currentPhotoPosition, setCurrentPhotoPosition] =
    useState<CurrentPhotoType>({
      top: 0,
      left: 0,
    });
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<
    number | undefined
  >(undefined);

  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  });

  usePreventScroll(selectedPhotoIndex);

  return (
    <Context.Provider
      value={{
        imagesState,
        setImagesState,
        currentPhotoPosition,
        setCurrentPhotoPosition,
        selectedPhotoIndex,
        setSelectedPhotoIndex,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAsymmetricPhotoGalleryContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      "useAsymmetricPhotoGalleryContext must be used within a Provider"
    );
  return context;
};
