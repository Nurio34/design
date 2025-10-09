import { useEffect, useState } from "react";
import "./index.css";
import { SectionSizeType } from "@/app/(routes)/css/image-library/ImageLibrary/_hooks/useSection";

interface BubbleType {
  size: number;
  top: number;
  left: number;
  opacity: number;
  animationDelay: number;
  sequence: number;
}

function Bubble({ sectionSize }: { sectionSize: SectionSizeType }) {
  const animationDuration = 32;

  const [bubble, setBubble] = useState<BubbleType>({
    size: 0,
    top: 0,
    left: 0,
    opacity: 0,
    animationDelay: 0,
    sequence: 0,
  });
  const { size, top, left, opacity, animationDelay, sequence } = bubble;

  useEffect(() => {
    const { width, height } = sectionSize;
    if (!width || !height) return;

    //** handle size */
    const minSize = 16;
    const maxSize = 32;
    const size = Math.floor(Math.random() * maxSize) + minSize;

    //** handle position */
    const top = Math.floor(Math.random() * (height - size));
    const left = Math.floor(Math.random() * (width - size));

    //** handle opacity */
    const opacity = (Math.floor(Math.random() * 4) + 1) * 0.1;

    //** handle animation delay*/
    const animationDelay = Math.floor(Math.random() * animationDuration);

    //** handle animation sequence */
    const minSequence = 30;
    const maxSequence = 160;
    const sequence =
      Math.floor(Math.random() * (maxSequence - minSequence)) + minSequence;

    setBubble({ size, top, left, opacity, animationDelay, sequence });
  }, [sectionSize]);

  return (
    <div
      className="Bubble absolute aspect-square bg-white/50 rounded-full"
      style={
        {
          "--width": size,
          "--animationDuration": animationDuration,
          "--animationDelay": animationDelay,
          "--sequence": sequence,
          width: size,
          top,
          left,
          opacity,
        } as React.CSSProperties
      }
    />
  );
}
export default Bubble;
