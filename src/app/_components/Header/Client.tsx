"use client";

import Link from "next/link";

const links = [
  {
    name: "CSS",
    href: "/css",
  },
  {
    name: "SVG",
    href: "/svg",
  },
  {
    name: "Canvas",
    href: "/canvas",
  },
  {
    name: "GSAP",
    href: "/gsap",
  },
  {
    name: "Three.js",
    href: "/three-js",
  },
];

function Client() {
  return (
    <header
      className="border-b border-base-content/20 py-2 px-4
        col-start-1 col-end-3 row-start-1 row-end-2
      "
    >
      <ul className="flex justify-center items-center gap-x-16">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
export default Client;
