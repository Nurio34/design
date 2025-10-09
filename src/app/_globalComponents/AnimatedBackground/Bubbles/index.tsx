import { SectionSizeType } from "@/app/(routes)/css/image-library/ImageLibrary/_hooks/useSection";
import Bubble from "./Bubble";
import "./index.css";

function Bubbles({ sectionSize }: { sectionSize: SectionSizeType }) {
  const totalBubbles = 200;

  return (
    <div className="AnimatedBackground_Bubbles overflow-hidden">
      {Array(totalBubbles)
        .fill("#")
        .map((_, index) => (
          <Bubble key={index} sectionSize={sectionSize} />
        ))}
    </div>
  );
}
export default Bubbles;
