"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface MainPhotoType {
  image: {
    src: string | undefined;
    description: string | undefined | null;
  };
  width: number | undefined;
  height: number | undefined;
}

interface ContextType {
  mainPhoto: MainPhotoType;
  setMainPhoto: Dispatch<SetStateAction<MainPhotoType>>;
  isInitialAnimationEnded: boolean;
  setIsInitialAnimationEnded: Dispatch<SetStateAction<boolean>>;
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

  return (
    <Context.Provider
      value={{
        mainPhoto,
        setMainPhoto,
        isInitialAnimationEnded,
        setIsInitialAnimationEnded,
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
