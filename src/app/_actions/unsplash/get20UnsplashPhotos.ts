"use server";

import { UnsplashPhoto } from "@/app/_types/unsplash/unsplashPhoto";

export const get20UnsplashPhotos = async (): Promise<UnsplashPhoto[]> => {
  const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

  const url = `https://api.unsplash.com/photos/?client_id=${unsplashAccessKey}&per_page=20`;
  const response = await fetch(url);
  const images = await response.json();

  return images;
};
