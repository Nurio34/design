import { Dispatch, SetStateAction, useEffect } from "react";
import { ImageType } from "../Context";
import tiger_sm_image from "@/../public/css/animal-slider/tiger-sm.webp";
import lion_sm_image from "@/../public/css/animal-slider/lion-sm.webp";
import wildDog_sm_image from "@/../public/css/animal-slider/wildDog-sm.webp";
import eagle_sm_image from "@/../public/css/animal-slider/eagle-sm.webp";
import wolf_sm_image from "@/../public/css/animal-slider/wolf-sm.webp";

import tiger_image from "@/../public/css/animal-slider/tiger.webp";
import lion_image from "@/../public/css/animal-slider/lion.webp";
import wildDog_image from "@/../public/css/animal-slider/wildDog.webp";
import eagle_image from "@/../public/css/animal-slider/eagle.webp";
import wolf_image from "@/../public/css/animal-slider/wolf.webp";

export const useImages = (setImages: Dispatch<SetStateAction<ImageType[]>>) => {
  useEffect(() => {
    setImages([
      {
        id: "tiger",
        description:
          "The tiger is the largest cat species in the world, known for its striking orange coat with bold black stripes. Native to Asia, tigers are powerful hunters that rely on stealth and strength to ambush their prey. They are solitary animals, highly territorial, and excellent swimmers. Sadly, many tiger subspecies are endangered due to habitat loss and poaching.",
        rg: tiger_image,
        sm: tiger_sm_image,
      },
      {
        id: "lion",
        description:
          "Lions are majestic and social big cats native to Africa and parts of India. Unlike other cats, lions live in groups called prides, which consist of females, their cubs, and a few males. Males are recognized by their thick manes, symbolizing dominance and protection. Lions are apex predators, often hunting cooperatively. Their roar can be heard up to 8 kilometers away.",
        rg: lion_image,
        sm: lion_sm_image,
      },
      {
        id: "wildDog",
        description:
          "The African wild dog, also known as the painted wolf, is one of Africa’s most efficient and cooperative hunters. Characterized by its mottled coat of black, yellow, and white patches, this endangered canine lives in tight-knit packs with strong social bonds. Each pack works together to care for the young and hunt prey with remarkable coordination and stamina.",
        rg: wildDog_image,
        sm: wildDog_sm_image,
      },
      {
        id: "eagle",
        description:
          "Eagles are large birds of prey renowned for their keen eyesight, powerful flight, and sharp talons. Found across many continents, they symbolize strength and freedom. Eagles soar at great heights, scanning vast areas for prey such as fish, small mammals, or other birds. They build massive nests called eyries and display remarkable loyalty to their territories and mates.",
        rg: eagle_image,
        sm: eagle_sm_image,
      },
      {
        id: "wolf",
        description:
          "The grey wolf, also known simply as the wolf, is a highly intelligent and social predator native to North America, Europe, and Asia. It is the largest member of the dog family and lives in packs led by an alpha pair. Wolves communicate through howls, body language, and scent marking. They are skilled hunters that rely on teamwork and endurance to chase down prey such as deer and elk. Grey wolves play a crucial role in maintaining ecological balance by controlling herbivore populations in their habitats.",
        rg: wolf_image,
        sm: wolf_sm_image,
      },
    ]);
  }, [setImages]);
};
