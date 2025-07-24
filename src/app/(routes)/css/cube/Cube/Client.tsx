import { useEffect, useRef } from "react";
import "./_css/index.css";

function Client() {
  const Skeleton = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const time = setTimeout(() => {
      if (!Skeleton.current) return;
      Skeleton.current.classList.remove("Box_Skeleton");
      Skeleton.current.classList.add("Box_Skeleton_Turn");
    }, 3400);

    return () => clearTimeout(time);
  }, []);
  return (
    <section className="h-full flex justify-center items-center perspective-midrange overflow-hidden">
      <div ref={Skeleton} className="Box_Skeleton  relative w-40 aspect-square">
        <div className="Box Right w-full h-full bg-secondary" />
        <div className="Box Left w-full h-full bg-accent" />
        <div className="Box Front w-full h-full bg-error" />
        <div className="Box Back w-full h-full bg-info" />
        <div className="Box Up w-full h-full bg-warning" />
        <div className="Box Down w-full h-full bg-base-content" />
      </div>
    </section>
  );
}
export default Client;
