import Food from "./_components/Food";
import SnakeBody from "./_components/SnakeBody";
import { useSnakeContext } from "./Context";

function Client() {
  const { size } = useSnakeContext();

  return (
    <section className="h-full grid place-content-center">
      <div
        className="w-80 aspect-square outline-2"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size},minmax(32px,1fr))`,
        }}
      >
        {Array(size * size)
          .fill("#")
          .map((_, index) => (
            <span key={index}>{index}</span>
          ))}
        <SnakeBody />
        <Food />
      </div>
    </section>
  );
}
export default Client;
