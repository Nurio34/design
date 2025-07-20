import { useRef, useState } from "react";
import "./_css/index.css";

function NextButton() {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <button
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
        if (isHovered) {
          target.classList.remove("Hover");
          target.classList.add("Unhover");
          hoverTimeout.current = setTimeout(() => {
            setIsHovered(false);
            target.classList.remove("Unhover");
            target.classList.add("Finished");
          }, 400);
        } else {
          if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
          setIsHovered(false);
          e.currentTarget.classList.remove("Hover");
        }
      }}
      className="Next_Button"
    >
      Next
    </button>
  );
}
export default NextButton;
