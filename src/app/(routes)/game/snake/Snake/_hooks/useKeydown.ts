import { useEffect, useState } from "react";
import { keys, KeysType } from "../Context";

export const useKeydown = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [direction, setDirection] = useState<KeysType | undefined>(undefined);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const key = e.key;
      if (!keys.includes(key as KeysType)) return;

      const newGameCondition = key === "ArrowRight" || key === "ArrowDown";
      if (!isGameStarted) {
        if (newGameCondition) {
          setIsGameStarted(true);
          setDirection(key as KeysType);
        }
      } else {
        const rightCondition = key === "ArrowRight" || key === "ArrowLeft";
        if (direction === "ArrowRight" && rightCondition) return;

        const leftCondition = key === "ArrowLeft" || key === "ArrowRight";
        if (direction === "ArrowLeft" && leftCondition) return;

        const upCondition = key === "ArrowUp" || key === "ArrowDown";
        if (direction === "ArrowUp" && upCondition) return;

        const downCondition = key === "ArrowDown" || key === "ArrowUp";
        if (direction === "ArrowDown" && downCondition) return;

        setDirection(key as KeysType);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isGameStarted, direction]);

  return { isGameStarted, direction, setIsGameStarted };
};
