"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  canvas,
  css,
  gsap,
  NavItemType,
  svg,
  threejs,
  game,
} from "../_projects";

export const useHandleNavItems = () => {
  const [navItems, setNavItems] = useState([] as NavItemType[]);
  const [pathState, setPathState] = useState("");

  const path = usePathname().slice(1);

  useEffect(() => {
    setPathState(path.split("/")[0]);
  }, [path]);

  useEffect(() => {
    switch (pathState) {
      case "css":
        setNavItems(css);
        break;
      case "svg":
        setNavItems(svg);
        break;
      case "canvas":
        setNavItems(canvas);
        break;
      case "gsap":
        setNavItems(gsap);
        break;
      case "threejs":
        setNavItems(threejs);
        break;
      case "game":
        setNavItems(game);
        break;

      default:
        break;
    }
  }, [pathState]);

  return { navItems, path: pathState };
};
