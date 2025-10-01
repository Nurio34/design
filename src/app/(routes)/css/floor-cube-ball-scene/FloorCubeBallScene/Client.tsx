import Cube from "./_components/Cube";
import "./_css/index.css";

function Client() {
  return (
    <section className="FloorCubeBallScene h-full">
      <div className="Scene h-full">
        <div className="Floor h-full" />
        <Cube />
        <div className="Ball" />
      </div>
    </section>
  );
}
export default Client;
