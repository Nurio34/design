import { CardType } from "../_cards";

function Card({ index, card }: { index: number; card: CardType }) {
  const { color, description, title } = card;
  return (
    <li
      className="w-52 aspect-square rounded-lg
        flex flex-col justify-between px-4 py-8
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      "
      style={{ backgroundColor: color }}
    >
      <h2 className="text-xs font-extrabold">{title}</h2>
      <p className=" font-semibold text-xl">{description}</p>
    </li>
  );
}
export default Card;
