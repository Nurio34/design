import AnimatedBorder from "./_components/AnimatedBorder";
import AnimatedClip from "./_components/AnimatedClip";
import DotButton from "./_components/Buttons/DotButton";
import Liquid from "./_components/Buttons/Liquid";
import NextButton from "./_components/Buttons/NextButton";
import Slant from "./_components/Buttons/Slant";
import Sunrise from "./_components/Buttons/Sunrise";
import Circle from "./_components/Circle";
import ClippedShape from "./_components/ClippedShape";
import Ellipse from "./_components/Ellipse";
import Inset from "./_components/Inset";
import InvertedBorder from "./_components/InvertedBorder";
import Path1 from "./_components/Path1";
import Polygon1 from "./_components/Polygon1";
import Tooltip from "./_components/Tooltip";
import "./_css/index.css";

function Client() {
  return (
    <section className="Clipping min-h-full mb-96 bg-base-300">
      <div className="grid grid-cols-6 items-center gap-4 min-h-40">
        <Circle />
        <Ellipse />
        <Inset />
        <Polygon1 />
        <Path1 />
        <Tooltip />
      </div>
      <AnimatedClip />
      <ClippedShape />
      <InvertedBorder />
      <div className="my-10 flex justify-center items-center gap-x-[1vw]">
        <NextButton />
        <DotButton />
        <Sunrise />
        <Slant />
        <Liquid />
      </div>
      <AnimatedBorder />
    </section>
  );
}
export default Client;
