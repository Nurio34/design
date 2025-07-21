import { useRef } from "react";
import "./_css/index.css";

function Liquid() {
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <button
      className="Liquid_Button"
      onMouseEnter={(e) => {
        e.currentTarget.classList.remove("Finished");
        e.currentTarget.classList.add("Hover");
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;

        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

        target.classList.remove("Hover");
        target.classList.add("Unhover");

        hoverTimeout.current = setTimeout(() => {
          target.classList.remove("Unhover");
          target.classList.add("Finished");
        }, 400);
      }}
    >
      Liquid
    </button>
  );
}
export default Liquid;
