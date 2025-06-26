import { IoIosArrowBack } from "react-icons/io";
import { useHandleNavItems } from "./_hooks/useHandleNavItems";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeNavMenu } from "@/store/slices/modal";

function Client() {
  const { navItems, path } = useHandleNavItems();

  const { navMenu } = useAppSelector((s) => s.modals);
  const dispatch = useAppDispatch();

  const collapseNav = () => dispatch(closeNavMenu());

  return (
    path && (
      <nav
        className={`border-r border-base-content/20 space-y-2 list-none
          col-start-1 col-end-2 row-start-2 row-end-3 transition-all
          hidden md:block
          ${
            navMenu
              ? "p-4 min-w-auto w-48 opacity-100"
              : "min-w-0 w-0 p-0 overflow-hidden opacity-0"
          }
        `}
      >
        <div className="flex justify-end pb-2">
          <button
            type="button"
            className="btn btn-sm btn-neutral text-xl transition-transform hover:scale-105 active:scale-95"
            onClick={collapseNav}
          >
            <IoIosArrowBack />
          </button>
        </div>
        {navItems.map((navItem) => (
          <li key={navItem.name} onClick={collapseNav}>
            <Link href={`/${path}/${navItem.href}`}>{navItem.name}</Link>{" "}
          </li>
        ))}
      </nav>
    )
  );
}
export default Client;
