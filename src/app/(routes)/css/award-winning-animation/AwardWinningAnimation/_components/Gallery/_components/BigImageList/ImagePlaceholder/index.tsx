import { useEffect, useRef } from "react";
import { useAwardWinningAnimationContext } from "../../../../../Context";

function ImagePlaceholder({ index }: { index: number }) {
  const { setImagePlaceholderWidth, ImagePlaceholdersRef } =
    useAwardWinningAnimationContext();

  const ImagePlaceholderRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const container = ImagePlaceholderRef.current;

    if (!container) return;

    if (index === 0) {
      const width = container.getBoundingClientRect().width;
      setImagePlaceholderWidth(width);
    }

    ImagePlaceholdersRef.current.push(container);
  }, [
    ImagePlaceholderRef,
    index,
    setImagePlaceholderWidth,
    ImagePlaceholdersRef,
  ]);

  return <li ref={ImagePlaceholderRef} className="h-full aspect-[12/16]"></li>;
}
export default ImagePlaceholder;
