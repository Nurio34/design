import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openNavMenu } from "@/store/slices/modal";
import { usePathname } from "next/navigation";
import { IoIosMenu } from "react-icons/io";

function MenuButton() {
  const { navMenu } = useAppSelector((s) => s.modals);
  const dispatch = useAppDispatch();

  const path = usePathname().slice(1);

  const openNav = () => dispatch(openNavMenu());

  if (path === "") return;

  return (
    !navMenu && (
      <button
        type="button"
        className="btn btn-sm text-xl absolute"
        onClick={openNav}
      >
        <IoIosMenu />
      </button>
    )
  );
}
export default MenuButton;
