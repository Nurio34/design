"use server";

import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";

type Category =
  | "nature"
  | "animals"
  | "travel"
  | "architecture"
  | "people"
  | "fashion"
  | "food"
  | "technology"
  | "business"
  | "sports"
  | "health"
  | "art"
  | "music"
  | "landscape"
  | "city"
  | "interior"
  | "flowers"
  | "cars"
  | "beach"
  | "mountains"
  | "space"
  | "abstract"
  | "minimal"
  | "winter"
  | "summer"
  | "forest"
  | "night"
  | "sunset"
  | "water"
  | "aerial";

export const getPhotosByCategory = async (
  category: Category,
  amount: number
): Promise<UnsplashPhoto[]> => {
  const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

  const url = `https://api.unsplash.com/search/photos/?client_id=${unsplashAccessKey}&query=${category}&per_page=${amount}&orientation=landscape`;
  const response = await fetch(url);
  const result = await response.json();

  return result.results;
};
