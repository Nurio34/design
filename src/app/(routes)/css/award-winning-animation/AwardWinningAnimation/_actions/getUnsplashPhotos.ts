"use server";

import { UnsplashPhoto } from "../_types/unsplashPhoto";

export const getUnsplashPhotos = async (): Promise<UnsplashPhoto> => {
  const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

  const url = `https://api.unsplash.com/photos/?client_id=${unsplashAccessKey}`;
  const response = await fetch(url);
  const images = await response.json();

  return images;
};
