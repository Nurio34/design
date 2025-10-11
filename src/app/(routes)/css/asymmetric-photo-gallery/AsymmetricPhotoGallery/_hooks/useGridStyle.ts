import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import { useMemo } from "react";

export const useGridStyle = (images: UnsplashPhoto[]) => {
  const gridStyle = useMemo(() => {
    const landscapeImages = images.filter(
      (img) => img.width / img.height > 1.2
    );
    const portraitImages = images.filter((img) => img.width / img.height < 0.8);
    const squareImages = images.filter(
      (img) => img.width / img.height >= 0.8 && img.width / img.height <= 1.2
    );

    const sumL = landscapeImages.reduce(
      (acc, img) => acc + img.width / img.height,
      0
    );
    const sumP = portraitImages.reduce(
      (acc, img) => acc + img.width / img.height,
      0
    );
    const sumS = squareImages.reduce(
      (acc, img) => acc + img.width / img.height,
      0
    );

    const numL = landscapeImages.length;
    const numP = portraitImages.length;
    const numS = squareImages.length;

    if (numL === 0 && numP === 0 && numS === 0) {
      return {};
    }

    const C = (4 * sumL + sumP + 2 * sumS) / (8 * numL + numP / 2 + 2 * numS);

    const H = 200; // Base height from original CSS
    const W = C * H;

    return {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fill, minmax(${W}px, 1fr))`,
      gridAutoRows: `${H}px`,
      gridAutoFlow: "dense",
      gap: "1rem",
    };
  }, [images]);

  return { gridStyle };
};
