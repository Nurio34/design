import { useEffect, useRef, useState } from "react";
import "./_css/index.css";
import SvgGoo from "./SvgGoo";

function Client() {
  const totalCircle = useRef(5);
  const InteractiveCircleRef = useRef<HTMLDivElement | null>(null);
  const CircleSizeRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({ x: undefined, y: undefined });

  //! Eslint
  useEffect(() => {}, [mousePosition]);
  //! ***

  useEffect(() => {
    const circle = InteractiveCircleRef.current;

    if (!circle) return;

    const { width } = circle.getBoundingClientRect();
    CircleSizeRef.current = width;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [InteractiveCircleRef]);

  return (
    <section className="MorphingGradientsAnimatedBackground relative h-full bg-linear-60 from-primary to-secondary isolate">
      <SvgGoo />
      <div className="Container w-full h-full">
        <p className="Text absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold ">
          Bubbles
        </p>
        {Array(totalCircle.current)
          .fill("#")
          .map((_, index) => (
            <div key={index} className="Circle" id={`Circle-${index}`} />
          ))}
        <div
          ref={InteractiveCircleRef}
          className="Circle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          id="InteractiveCircle"
          // style={{
          //   top:
          //     mousePosition.y && CircleSizeRef.current
          //       ? mousePosition.y - CircleSizeRef.current / 2
          //       : 0,
          //   left:
          //     mousePosition.x && CircleSizeRef.current
          //       ? mousePosition.x - CircleSizeRef.current / 2
          //       : 0,
          // }}
        />
      </div>
    </section>
  );
}
export default Client;
