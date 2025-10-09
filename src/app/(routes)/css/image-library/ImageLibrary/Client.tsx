import Header from "./_components/Header";
import Bubbles from "@/app/_globalComponents/AnimatedBackground/Bubbles";
import Squares from "@/app/_globalComponents/Background/Squares";
import { useSection } from "./_hooks/useSection";
import Images from "./_components/Images";
import { useContainer } from "./_hooks/useContainer";

function Client() {
  const { SectionRef, sectionSize } = useSection();
  const { ContainerRef } = useContainer();

  return (
    <section ref={SectionRef} className="ImageLibrary relative h-full">
      <Squares clr1="rgba(255, 192, 203,0.3)" clr2="rgba(128,0,128,0.3)" />
      <Bubbles sectionSize={sectionSize} />
      <div
        ref={ContainerRef}
        className="w-3/4 h-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          grid grid-rows-[auto_1fr]
        "
      >
        <Header />
        <Images />
      </div>
    </section>
  );
}
export default Client;
