import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./_css/index.css";

function Client({ images }: { images: UnsplashPhoto[] }) {
  const [imageList, setImageList] = useState<UnsplashPhoto[][]>([]);

  useEffect(() => {
    function splitIntoFive(arr: UnsplashPhoto[]) {
      const result = [];
      const chunkSize = Math.ceil(arr.length / 5);

      for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
      }
      setImageList(result);
    }

    splitIntoFive(images);
  }, []);

  return (
    <section
      className="relative overflow-hidden h-full"
      id="AwardWinningAnimation"
    >
      <ul
        className="w-[110%] h-full flex gap-x-[5vw]
        absolute top-0 left-1/2 -translate-x-1/2
      "
      >
        {imageList.map((column, index) => {
          return (
            <li
              key={index}
              className="w-full bg-red-300 flex flex-col gap-y-[5vh]"
              id={`AwardWinningAnimationColumn-${index}`}
            >
              {column.map((imageSrc, ind) => {
                return (
                  <figure
                    key={imageSrc.blur_hash}
                    className="relative w-full aspect-video"
                    id={`AwardWinningAnimationImg-${ind}`}
                  >
                    <Image
                      src={imageSrc.urls.regular}
                      alt={imageSrc.alt_description || "image"}
                      fill
                      className="object-cover"
                    />
                  </figure>
                );
              })}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Client;
