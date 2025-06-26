"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { cards } from "./_components/RightSection/_cards";

interface IndexesType {
  current: number;
  next: number;
}

interface ContextType {
  divHeightGlobal: undefined | number;
  setDivHeightGlobal: Dispatch<SetStateAction<number | undefined>>;
  estimatedScroll: number;
  totalCards: number;
  scrollTop: number;
  setScrollTop: Dispatch<SetStateAction<number>>;
  indexes: IndexesType;
  setIndexes: Dispatch<SetStateAction<IndexesType>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const ScrollAnimationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [divHeightGlobal, setDivHeightGlobal] = useState<undefined | number>(
    undefined
  );

  const estimatedScroll = 400;
  const totalCards = cards.length - 1;
  const [scrollTop, setScrollTop] = useState(0);

  const [indexes, setIndexes] = useState<IndexesType>({
    current: -1,
    next: -1,
  });

  return (
    <Context.Provider
      value={{
        divHeightGlobal,
        setDivHeightGlobal,
        estimatedScroll,
        totalCards,
        scrollTop,
        setScrollTop,
        indexes,
        setIndexes,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useScrollAnimationContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      "useScrollAnimationContext must be used within ScrollAnimationProvider"
    );
  return context;
};
