"use server";

import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";

export const get20UnsplashPhotos = async (): Promise<UnsplashPhoto[]> => {
  const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

  const url = `https://api.unsplash.com/search/photos/?client_id=${unsplashAccessKey}&query=nature&per_page=20&orientation=landscape`;
  const response = await fetch(url);
  const result = await response.json();

  return result.results;
};
