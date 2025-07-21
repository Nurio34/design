import { useEffect, useState } from "react";

export type ImageType = {
  width: number;
  height: number;
  ratio: number;
  url: string;
};

export const useImages = () => {
  const [urls, setUrls] = useState<string[] | null>(null);
  const [images, setImages] = useState<ImageType[]>([]);
  const [columns, setColumns] = useState<ImageType[][]>([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products: [] = await response.json();

        const urls = products.map(
          (product: { image: string }) => product.image
        );
        setUrls(urls);
      } catch (error) {
        console.error(error);
      }
    };

    getImages();
  }, []);

  useEffect(() => {
    if (!urls) return;

    urls.map((url) => {
      const i = new Image();
      i.src = url;
      i.onload = () => {
        const width = i.naturalWidth;
        const height = i.naturalHeight;
        const ratio = +(width / height).toFixed(2);
        setImages((prev) => [...prev, { width, height, ratio, url }]);
      };
    });
  }, [urls]);

  useEffect(() => {
    if (images.length < 20) return;

    const columnedImages = images.reduce(
      (arr: ImageType[][], image: ImageType, index: number) => {
        if (index % 3 === 0) arr[0].push(image);
        if (index % 3 === 1) arr[1].push(image);
        if (index % 3 === 2) arr[2].push(image);

        return arr;
      },
      [[], [], []]
    );

    setColumns(columnedImages);
  }, [images]);

  return { columns };
};
