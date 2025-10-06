import { useRef } from "react";
import { useImagePlaceHolders } from "./_hooks/useImagePlaceHolders";

function ImagePlaceholder({ index }: { index: number }) {
  const ImagePlaceholderRef = useRef<HTMLLIElement | null>(null);

  useImagePlaceHolders(ImagePlaceholderRef, index);

  return <li ref={ImagePlaceholderRef} className="h-full aspect-[12/16]"></li>;
}
export default ImagePlaceholder;
