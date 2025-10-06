"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { StaticImageData } from "next/image";
import { useImages } from "./_hooks/useImages";
import { useListImages } from "./_hooks/useListImages";

export interface ImageType {
  id: string;
  description: string;
  rg: StaticImageData;
  sm: StaticImageData;
}

export interface WrapperStateType {
  width: number;
  height: number;
  gapX: number;
  gapY: number;
  top: number;
}

export interface ListImageType {
  width: number;
  height: number;
  top: number;
  firsImageLeft: number;
}

interface ContextType {
  images: ImageType[];
  setImages: Dispatch<SetStateAction<ImageType[]>>;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  wrapperState: WrapperStateType;
  setWrapperState: Dispatch<SetStateAction<WrapperStateType>>;
  listImages: ListImageType;
  setListImages: Dispatch<SetStateAction<ListImageType>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const AnimalSliderProvider = ({ children }: { children: ReactNode }) => {
  const [images, setImages] = useState<ImageType[]>([]);
  useImages(setImages);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [wrapperState, setWrapperState] = useState<WrapperStateType>({
    width: 0,
    height: 0,
    gapX: 0,
    gapY: 0,
    top: 0,
  });

  const [listImages, setListImages] = useState<ListImageType>({
    width: 0,
    height: 0,
    top: 0,
    firsImageLeft: 0,
  });
  useListImages(wrapperState, setListImages);

  return (
    <Context.Provider
      value={{
        images,
        setImages,
        currentIndex,
        setCurrentIndex,
        wrapperState,
        setWrapperState,
        listImages,
        setListImages,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAnimalSliderContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useAnimalSliderContext must be used within a Provider");
  return context;
};
