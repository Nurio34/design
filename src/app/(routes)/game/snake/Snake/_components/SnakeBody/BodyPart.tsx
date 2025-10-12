import { useSnakeContext } from "../../Context";

function BodyPart({
  position,
  index,
}: {
  position: [number, number];
  index: number;
}) {
  const { totalPart } = useSnakeContext();

  if (index > totalPart) return;

  return (
    <span
      key={index}
      className="bg-red-500 transition-all"
      style={{
        gridColumn: `${position[0]} / ${position[0] + 1}`,
        gridRow: `${position[1]} / ${position[1] + 1}`,
      }}
    />
  );
}
export default BodyPart;
