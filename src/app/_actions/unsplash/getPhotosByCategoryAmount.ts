"use server";

import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import { Category } from "./_type";

export const getPhotosByCategoryAmount = async (
  category: Category,
  amount: number
): Promise<UnsplashPhoto[]> => {
  const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

  const url = `https://api.unsplash.com/search/photos/?client_id=${unsplashAccessKey}&query=${category}&per_page=${amount}`;
  const response = await fetch(url);
  const result = await response.json();

  return result.results;
};
