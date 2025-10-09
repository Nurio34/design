"use client";

import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextType {
  images: UnsplashPhoto[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  containerState: ContainerType;
  setContainerState: Dispatch<SetStateAction<ContainerType>>;
}

export interface ContainerType {
  width: number;
  height: number;
  top: number;
  left: number;
}

const Context = createContext<ContextType | undefined>(undefined);

export const ImageLibraryrovider = ({
  images,
  children,
}: {
  images: UnsplashPhoto[];
  children: ReactNode;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerState, setContainerState] = useState<ContainerType>({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  return (
    <Context.Provider
      value={{
        images,
        currentIndex,
        setCurrentIndex,
        containerState,
        setContainerState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useImageLibraryContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useImageLibraryContext must be used within a Provider");
  return context;
};
