import { useEffect, useState } from "react";

export const useColumnCount = () => {
  const [columnCount, setColumnCount] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleColumnCount = () => {
      const screenSize = window.innerWidth;
      const paddingX = (screenSize * 5) / 100;

      if (screenSize - paddingX * 2 < 375 * 2) setColumnCount(undefined);
      else if (screenSize - paddingX * 2 < 375 * 3) setColumnCount(2);
      else if (screenSize - paddingX * 2 < 375 * 4) setColumnCount(3);
      else setColumnCount(4);
    };

    handleColumnCount();

    window.addEventListener("resize", handleColumnCount);

    return () => window.removeEventListener("resize", handleColumnCount);
  }, []);

  return { columnCount };
};
