import { useSnakeContext } from "../../Context";

function Food() {
  const { foodPosition } = useSnakeContext();
  return (
    <span
      className="bg-green-500 transition-all"
      style={{
        gridColumn: `${foodPosition[0]} / ${foodPosition[0] + 1}`,
        gridRow: `${foodPosition[1]} / ${foodPosition[1] + 1}`,
      }}
    />
  );
}
export default Food;
