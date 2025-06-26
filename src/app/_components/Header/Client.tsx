import Link from "next/link";
import { links } from "./_links";
import { useAppDispatch } from "@/store/hooks";
import { closeNavMenu } from "@/store/slices/modal";
import MenuButton from "./_components/MenuButton";

function Client() {
  const dispatch = useAppDispatch();

  const collapseNav = () => dispatch(closeNavMenu());

  return (
    <header
      className="min-h-[49px] border-b border-base-content/20 py-2 px-4
        col-start-1 col-end-3 row-start-1 row-end-2
        hidden md:grid grid-cols-[auto_1fr_auto]
      "
    >
      <MenuButton />
      <ul
        className={`col-start-2 col-end-3
        flex justify-center items-center gap-x-16
      `}
      >
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} onClick={collapseNav}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
export default Client;
