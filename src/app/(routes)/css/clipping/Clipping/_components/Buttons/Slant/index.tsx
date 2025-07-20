import { useRef } from "react";
import "./_css/index.css";

function Slant() {
  return (
    <button
      className="Slant_Button"
      onMouseEnter={(e) => {
        e.currentTarget.classList.remove("Unhover");
        e.currentTarget.classList.add("Hover");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.classList.remove("Hover");
        e.currentTarget.classList.add("Unhover");
      }}
    >
      Slant
    </button>
  );
}
export default Slant;
