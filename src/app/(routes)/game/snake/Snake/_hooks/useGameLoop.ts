import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { KeysType, PositionType } from "../Context";

export const useGameLoop = (
  isGameStarted: boolean,
  setIsGameStarted: Dispatch<SetStateAction<boolean>>,
  direction: KeysType | undefined,
  positions: PositionType[],
  setPositions: Dispatch<SetStateAction<PositionType[]>>,
  totalPart: number,
  size: number,
  setTotalPart: Dispatch<SetStateAction<number>>,
  setFoodPosition: Dispatch<SetStateAction<PositionType>>
) => {
  const IntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isGameStarted) return;

    // if (IntervalRef.current) clearInterval(IntervalRef.current);

    IntervalRef.current = setInterval(() => {
      //** Handle "positions" state */
      if (direction === "ArrowDown") {
        if (positions[0][1] === 10) return setIsGameStarted(false);
        setPositions((prev) => [[prev[0][0], prev[0][1] + 1], ...prev]);
      } else if (direction === "ArrowUp") {
        if (positions[0][1] === 1) return setIsGameStarted(false);
        setPositions((prev) => [[prev[0][0], prev[0][1] - 1], ...prev]);
      } else if (direction === "ArrowRight") {
        if (positions[0][0] === 10) return setIsGameStarted(false);
        setPositions((prev) => [[prev[0][0] + 1, prev[0][1]], ...prev]);
      } else {
        if (positions[0][0] === 1) return setIsGameStarted(false);
        setPositions((prev) => [[prev[0][0] - 1, prev[0][1]], ...prev]);
      }
    }, 1000 / 6);

    return () => {
      if (IntervalRef.current) clearInterval(IntervalRef.current);
    };
  }, [isGameStarted, direction, positions, setIsGameStarted, setPositions]);

  useEffect(() => {
    if (!isGameStarted) {
      setPositions([[1, 1]]);
      setTotalPart(0);
      setFoodPosition([2, 1]);
    }
  }, [isGameStarted, setPositions, setTotalPart, setFoodPosition]);

  useEffect(() => {
    const head = positions[0];
    const legitArray = positions.slice(1, totalPart + 1);
    if (JSON.stringify(legitArray).includes(JSON.stringify(head)))
      setIsGameStarted(false);
  }, [positions, isGameStarted, setIsGameStarted, totalPart]);

  useEffect(() => {
    if (totalPart === size * size) console.log("Congs....");
  }, [totalPart, size]);
};
