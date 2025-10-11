"use server";

import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import { Category } from "./_type";

export const getPhotosByCategoryAmount = async (
  category: Category,
  page: number,
  amount: number
): Promise<UnsplashPhoto[]> => {
  try {
    const unsplashAccessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
    const url = `https://api.unsplash.com/search/photos/?client_id=${unsplashAccessKey}&query=${category}&page=${page}&per_page=${amount}`;
    const response = await fetch(url);
    const result = await response.json();

    return result.results;
  } catch (error) {
    console.log({ msg: "Photos download error !", error });
    return [];
  }
};
