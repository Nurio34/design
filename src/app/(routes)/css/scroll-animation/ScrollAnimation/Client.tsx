import LeftSection from "./_components/LeftSection";
import RightSection from "./_components/RightSection";
import { useInitialSizeAdjustment } from "./_hooks/useInitialSizeAdjustment";
import { useScroll } from "./_hooks/useScroll";
import { useAnimation } from "./_hooks/useAnimation";

function Client() {
  const { DivRef, divHeight, totalDivHeight } = useInitialSizeAdjustment();
  const { SectionRef } = useScroll();
  useAnimation();

  return (
    <section
      ref={SectionRef}
      className="ScrollAnimation_Section w-full h-full overflow-y-scroll"
      style={{
        height: !divHeight ? "100%" : divHeight,
        scrollbarWidth: "none",
      }}
    >
      <div
        className="relative"
        ref={DivRef}
        style={{ height: !totalDivHeight ? "100%" : totalDivHeight }}
      >
        <div
          className="flex flex-col md:flex-row sticky top-0"
          style={{ height: !divHeight ? "100%" : divHeight }}
        >
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </section>
  );
}
export default Client;
