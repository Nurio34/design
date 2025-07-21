import { useRef, useState } from "react";
import "./_css/index.css";

function Slant() {
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="Slant_Button"
      onMouseEnter={(e) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        e.currentTarget.classList.remove("Finished");
        e.currentTarget.classList.add("Hover");
        hoverTimeout.current = setTimeout(() => {
          setIsHovered(true);
        }, 400);
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

        if (!isHovered) {
          target.classList.remove("Hover");
        } else {
          target.classList.remove("Hover");
          target.classList.add("Unhover");

          hoverTimeout.current = setTimeout(() => {
            target.classList.remove("Unhover");
            target.classList.add("Finished");
            setIsHovered(false);
          }, 400);
        }
      }}
    >
      Slant
    </button>
  );
}
export default Slant;
