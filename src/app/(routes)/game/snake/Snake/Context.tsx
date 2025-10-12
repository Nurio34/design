"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useKeydown } from "./_hooks/useKeydown";
import { useGameLoop } from "./_hooks/useGameLoop";

export type PositionType = [number, number];

export const keys = [
  "ArrowRight",
  "ArrowDown",
  "ArrowLeft",
  "ArrowUp",
] as const;
export type KeysType = (typeof keys)[number];

interface ContextType {
  size: number;
  positions: PositionType[];
  setPositions: React.Dispatch<React.SetStateAction<PositionType[]>>;
  totalPart: number;
  setTotalPart: React.Dispatch<React.SetStateAction<number>>;
  foodPosition: PositionType;
  setFoodPosition: React.Dispatch<React.SetStateAction<PositionType>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const SnakeProvider = ({ children }: { children: ReactNode }) => {
  const size = 10;
  const [positions, setPositions] = useState<PositionType[]>([[1, 1]]);
  const [totalPart, setTotalPart] = useState(0);
  const [foodPosition, setFoodPosition] = useState<PositionType>([2, 1]);

  const { isGameStarted, direction, setIsGameStarted } = useKeydown();
  useGameLoop(
    isGameStarted,
    setIsGameStarted,
    direction,
    positions,
    setPositions,
    totalPart,
    size,
    setTotalPart,
    setFoodPosition
  );

  useEffect(() => {
    const head = positions[0];
    const food = foodPosition;

    const handleNewFoodPosition = () => {
      const randomX = 1 + Math.floor(Math.random() * (size - 1));
      const randomY = 1 + Math.floor(Math.random() * (size - 1));

      const legitArray = positions.slice(0, totalPart + 1);
      if (
        JSON.stringify(legitArray).includes(JSON.stringify([randomX, randomY]))
      ) {
        handleNewFoodPosition();
        return;
      } else setFoodPosition([randomX, randomY]);
    };

    if (head[0] === food[0] && head[1] === food[1]) {
      setTotalPart((prev) => prev + 1);
      handleNewFoodPosition();
    }
  }, [positions, foodPosition, totalPart]);

  useEffect(() => {}, [totalPart, positions]);

  return (
    <Context.Provider
      value={{
        size,
        positions,
        setPositions,
        totalPart,
        setTotalPart,
        foodPosition,
        setFoodPosition,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useSnakeContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useSnakeContext must be used within a Provider");
  return context;
};
