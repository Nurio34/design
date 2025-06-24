import { cards } from "./_cards";
import Card from "./Card";

function RightSection() {
  return (
    <section className="basis-1/2 relative">
      <ul>
        {cards.map((card, index) => (
          <Card key={index} index={index} card={card} />
        ))}
      </ul>
    </section>
  );
}
export default RightSection;
