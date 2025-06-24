"use client";

import { useHandleNavItems } from "./_hooks/useHandleNavItems";
import Link from "next/link";

function Client() {
  const { navItems, path } = useHandleNavItems();

  return (
    path && (
      <nav
        className="min-w-48 border-r border-base-content/20 py-4 pl-4 space-y-2 list-none
          col-start-1 col-end-2 row-start-2 row-end-3
        "
      >
        {navItems.map((navItem) => (
          <li key={navItem.name}>
            <Link href={`/${path}/${navItem.href}`}>{navItem.name}</Link>{" "}
          </li>
        ))}
      </nav>
    )
  );
}
export default Client;
