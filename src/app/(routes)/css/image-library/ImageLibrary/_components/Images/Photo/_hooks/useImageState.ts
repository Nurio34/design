import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";

export const useImageState = (image: UnsplashPhoto) => {
  const { alt_description, urls, description, width, height } = image;
  const short_desc_arr = alt_description?.split(" ");
  short_desc_arr!.length = 5;
  const short_desc = short_desc_arr!.join(" ");
  short_desc_arr!.length = 3;
  const book_cover = short_desc_arr!.join(" ");

  return {
    urls,
    description,
    book_cover,
    short_desc,
    alt_description,
    width,
    height,
  };
};
