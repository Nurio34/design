import { useEffect, useRef, useState } from "react";

export interface SectionSizeType {
  width: number;
  height: number;
}

export const useSection = () => {
  const SectionRef = useRef<HTMLDivElement | null>(null);
  const [sectionSize, setSectionSize] = useState<SectionSizeType>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const section = SectionRef.current;
    if (!section) return;

    const { width, height } = section.getBoundingClientRect();
    setSectionSize({ width, height });
  }, []);

  return { SectionRef, sectionSize };
};
