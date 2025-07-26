import { useState } from "react";
import Background from "./_components/Background";
import Card from "./_components/Card";

const images = [
  "/css/pokemon-cards/alakazam.webp",
  "/css/pokemon-cards/charizard.webp",
  "/css/pokemon-cards/charmender.webp",
  "/css/pokemon-cards/mewto.webp",
  "/css/pokemon-cards/pikachu.webp",
  "/css/pokemon-cards/squertl.webp",
];

function Client() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <section
      id="Section"
      className="relative h-full flex justify-center items-center perspective-distant bg-linear-60 from-primary/70 to-accent/70"
    >
      <Background />
      <div className="flex gap-10 justify-center flex-wrap max-w-[656px] transform-3d">
        {images.map((image, index) => (
          <Card
            key={index}
            image={image}
            index={index}
            activeCardIndex={activeCardIndex}
            setActiveCardIndex={setActiveCardIndex}
          />
        ))}
      </div>
    </section>
  );
}
export default Client;
