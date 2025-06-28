"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Moves, moves } from "./_moves";

interface ImageState {
  isLoading: boolean;
  image: undefined | HTMLImageElement;
  src: undefined | string;
  width: undefined | number;
  height: undefined | number;
  moves: Moves;
}
interface ContextType {
  imageState: ImageState;
  setImageState: Dispatch<SetStateAction<ImageState>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const CharacterAnimationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [imageState, setImageState] = useState<ImageState>({
    isLoading: true,
    image: undefined,
    src: undefined,
    width: undefined,
    height: undefined,
    moves,
  });

  useEffect(() => {
    const image = new Image();
    image.src = "/css/character-animation/character-vector2.webp";
    image.onload = () => {
      const src = image.src;
      const width = image.naturalWidth / 12;
      const height = image.naturalHeight / 6;

      setImageState((pre) => ({
        ...pre,
        isLoading: false,
        image,
        src,
        width,
        height,
      }));
    };
  }, []);

  return (
    <Context.Provider
      value={{
        imageState,
        setImageState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCharacterAnimationContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      "useCharacterAnimationContext must be used within CharacterAnimationProvider"
    );
  return context;
};
