import Cube from "./_components/Cube";

function Client() {
  return (
    <section className="h-full flex justify-center items-center">
      <div className="flex justify-center items-center gap-x-10 perspective-distant perspective-origin-[0px_-600px]">
        {Array(40)
          .fill("#")
          .map((_, index) => (
            <Cube key={index} index={index} />
          ))}
      </div>
    </section>
  );
}
export default Client;
