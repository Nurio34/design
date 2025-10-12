import Food from "./_components/Food";
import SnakeBody from "./_components/SnakeBody";
import { useSnakeContext } from "./Context";
import "./_css/index.css";

function Client() {
  const { size } = useSnakeContext();

  return (
    <section className="Snake bg-base-content h-full grid place-content-center">
      <div
        className=" w-screen max-w-80 aspect-square outline-2"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size},minmax(32px,1fr))`,
        }}
      >
        {Array(size * size)
          .fill("#")
          .map((_, index) => (
            <span
              className="border-[1] border-collapse border-white/20"
              key={index}
              style={{
                gridColumn: `${(index % size) + 1}/${(index % size) + 2}`,
                gridRow: `${Math.ceil((index + 1) / size)}/${
                  Math.ceil((index + 1) / size) + 1
                }`,
              }}
            />
          ))}
        <SnakeBody />
        <Food />
      </div>
    </section>
  );
}
export default Client;
