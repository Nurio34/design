import { useRef } from "react";
import "./_css/index.css";

function Sunrise() {
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <button
      className="Sunrise_Button"
      onMouseEnter={(e) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

        e.currentTarget.classList.remove("Finished");
        e.currentTarget.classList.add("Hover");
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;

        target.classList.remove("Hover");
        target.classList.add("Unhover");

        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(() => {
          target.classList.remove("Unhover");
          target.classList.add("Finished");
        }, 400);
      }}
    >
      Sunrise
    </button>
  );
}
export default Sunrise;
