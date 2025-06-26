import { cards } from "./_cards";
import Card from "./Card";

function RightSection() {
  return (
    <div className="basis-1/2 relative">
      <ul className="isolate">
        {cards.map((card, index) => (
          <Card key={index} index={index} card={card} />
        ))}
      </ul>
    </div>
  );
}
export default RightSection;
