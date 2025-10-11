"use server";

import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";
import { Category, Orientation } from "./_type";

export const getPhotosByCategoryOrientationAmount = async (
  category: Category,
  landscape: Orientation,
  amount: number
): Promise<UnsplashPhoto[]> => {
  const unsplashAccessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  const url = `https://api.unsplash.com/search/photos/?client_id=${unsplashAccessKey}&query=${category}&per_page=${amount}&orientation=${landscape}`;
  const response = await fetch(url);
  const result = await response.json();

  return result.results;
};
