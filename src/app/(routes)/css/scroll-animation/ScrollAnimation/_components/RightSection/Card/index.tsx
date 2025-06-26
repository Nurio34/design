import { useScrollAnimationContext } from "../../../Context";
import { CardType } from "../_cards";

function Card({ index, card }: { index: number; card: CardType }) {
  const { color, description, title } = card;

  const { indexes, divHeightGlobal } = useScrollAnimationContext();
  const { current, next } = indexes;

  return (
    <li
      className="w-52 aspect-square rounded-lg
        flex flex-col justify-between px-4 py-8
        absolute top-1/2 left-1/2 transition-transform duration-[1.5s] md:duration-[2s]
      "
      style={{
        backgroundColor: color,
        // transform: `rotate(${index * 10 * -1}deg)`,
        // rotate: `${index * -10}deg`,
        zIndex: index * -1,
        transform: `translate(-50%,${
          current >= index ? `${-divHeightGlobal! * 1.5}px` : "-50%"
        }) rotateZ(${next === index ? 0 : index * -10}deg)`,
      }}
    >
      <h2 className="text-xs font-extrabold">{title}</h2>
      <p className=" font-bold text-2xl">{description}</p>
    </li>
  );
}
export default Card;
