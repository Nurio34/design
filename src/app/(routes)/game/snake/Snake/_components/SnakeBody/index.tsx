import { useSnakeContext } from "../../Context";
import BodyPart from "./BodyPart";

function SnakeBody() {
  const { positions } = useSnakeContext();

  return (
    <>
      {positions.map((position, index) => (
        <BodyPart key={index} position={position} index={index} />
      ))}
    </>
  );
}
export default SnakeBody;
