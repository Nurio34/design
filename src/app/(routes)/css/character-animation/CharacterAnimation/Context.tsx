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

interface Moves {
  stand: {
    row: number;
    frames: number;
  };
  move: {
    row: number;
    frames: number;
  };
  die: {
    row: number;
    frames: number;
  };
  attack: {
    row: number;
    frames: number;
  };
  defance: {
    row: number;
    frames: number;
  };
  walk: {
    row: number;
    frames: number;
  };
}

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
    moves: {
      stand: {
        row: 0,
        frames: 5,
      },
      move: {
        row: 1,
        frames: 2,
      },
      die: {
        row: 2,
        frames: 5,
      },
      attack: {
        row: 3,
        frames: 7,
      },
      defance: {
        row: 4,
        frames: 3,
      },
      walk: {
        row: 5,
        frames: 11,
      },
    },
  });

  useEffect(() => {
    const image = new Image();
    image.src = "/character-vector.webp";
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
