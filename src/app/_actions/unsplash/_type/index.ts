export const categories = [
  "nature",
  "animals",
  "travel",
  "architecture",
  "people",
  "fashion",
  "food",
  "technology",
  "business",
  "sports",
  "health",
  "art",
  "music",
  "landscape",
  "city",
  "interior",
  "flowers",
  "cars",
  "beach",
  "mountains",
  "space",
  "abstract",
  "minimal",
  "winter",
  "summer",
  "forest",
  "night",
  "sunset",
  "water",
  "aerial",
] as const;

// 🔥 Now the type is inferred automatically:
export type Category = (typeof categories)[number];

export type Orientation = "landscape" | "portrait" | "squarish";
