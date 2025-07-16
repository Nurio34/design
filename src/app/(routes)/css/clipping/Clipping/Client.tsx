import Circle from "./_components/Circle";
import Ellipse from "./_components/Ellipse";
import Inset from "./_components/Inset";
import Path1 from "./_components/Path1";
import Polygon1 from "./_components/Polygon1";
import "./_css/index.css";

function Client() {
  return (
    <section className="Clipping h-full grid grid-cols-6 grid-rows-6 gap-4">
      <Circle />
      <Ellipse />
      <Inset />
      <Polygon1 />
      <Path1 />
    </section>
  );
}
export default Client;
