export interface UnsplashPhoto {
  id: string;
  slug: string;
  alternative_slugs: {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
    id: string;
    [lang: string]: string; // allows extra locales if API expands
  };
  created_at: string; // ISO date string
  updated_at: string;
  promoted_at?: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string | null;
  alt_description?: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  bookmarked?: boolean; // Unsplash often excludes this if not applicable
  sponsorship?: null | Record<string, unknown>;
  topic_submissions?: Record<string, unknown>;
  asset_type: "photo" | "illustration" | string;

  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: string;
    twitter_username?: string | null;
    portfolio_url?: string | null;
    bio?: string | null;
    location?: string | null;
    links: Record<string, string>;
    profile_image: Record<string, string>;
    instagram_username?: string | null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    total_illustrations?: number;
    total_promoted_illustrations?: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social?: Record<string, string | null>;
  };
}
