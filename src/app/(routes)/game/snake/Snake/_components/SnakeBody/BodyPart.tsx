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
      className="bg-primary transition-all"
      style={{
        gridColumn: `${position[0]} / ${position[0] + 1}`,
        gridRow: `${position[1]} / ${position[1] + 1}`,
        clipPath:
          'path("M 3,6 A 3,3 0,0,1 3,3 L 26,3 A 3,3 0,0,1 29,6 L 29,26 A 3,3 0,0,1 26,29 L 6,29 A 3,3 0,0,1  3,26 L 3,6")',
      }}
    />
  );
}
export default BodyPart;
