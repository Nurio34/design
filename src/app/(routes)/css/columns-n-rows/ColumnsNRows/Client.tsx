import Image from "next/image";
import { useImages } from "./_hooks/useImages";
import Column from "./_components/Column";
import Row from "./_components/Row";
import { useAppSelector } from "@/store/hooks";

function Client() {
  const { maxColumnHeight } = useAppSelector((s) => s.modals);
  const { columns } = useImages();

  return (
    <section className="h-full">
      <div
        className="h-full grid grid-cols-3 gap-x-[5vw] px-[10vw]"
        style={{
          maxHeight: maxColumnHeight === 0 ? undefined : maxColumnHeight,
        }}
      >
        {columns.map((column, index) => (
          <Column key={index} column={column} index={index} />
        ))}
      </div>
      <div className="h-screen grid grid-rows-[repeat(3,100px)] gap-y-[5vh] items-end">
        {columns.map((column, index) => (
          <Row key={index} column={column} index={index} />
        ))}
      </div>
    </section>
  );
}
export default Client;
