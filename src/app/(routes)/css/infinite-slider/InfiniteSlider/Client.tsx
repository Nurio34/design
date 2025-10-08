import Image from "next/image";
import "./_css/index.css";
import { useEffect, useRef, useState } from "react";

function Client() {
  const slider1Total = 10;
  const slider2Total = 9;

  const ContainerRef = useRef<HTMLDivElement | null>(null);
  const Slider1ContainerRef = useRef<HTMLUListElement | null>(null);
  const Slider2ContainerRef = useRef<HTMLUListElement | null>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [firstSliderItemWidth, setFirstSliderItemWidth] = useState(0);
  const [secondSliderHeight, setSecondSliderHeight] = useState(0);
  console.log({ secondSliderHeight });

  useEffect(() => {
    const container = ContainerRef.current;
    if (!container) return;

    const width = container.getBoundingClientRect().width;
    setContainerWidth(width);
  }, []);

  useEffect(() => {
    const container = Slider1ContainerRef.current;
    if (!container) return;

    const containerWidth = container.getBoundingClientRect().width;

    setFirstSliderItemWidth(+(containerWidth / slider1Total).toFixed(2));
  }, [containerWidth]);

  useEffect(() => {
    const container = Slider2ContainerRef.current;
    if (!container) return;

    const height = container.getBoundingClientRect().height;
    setSecondSliderHeight(height);
  }, []);

  return (
    <section className="InfiniteSlider h-full px-[20vw] py-[5vh] bg-gradient-to-br from-white to-gray-300">
      <div
        ref={ContainerRef}
        className="Container h-full grid grid-rows-[0.75fr_0.05fr_0.20fr]"
      >
        <div className="Banner grid grid-rows-[auto_1fr] gap-y-[2vh]">
          <div className="flex gap-x-[1vw]">
            <div
              className="font-semibold text-[150px] uppercase leading-[100px] z-10"
              style={{
                letterSpacing: "-10px",
                // mixBlendMode: "soft-light",
                WebkitTextStroke: "2px white",
              }}
            >
              playpause
            </div>
            <div>
              <p className="font-bold text-4xl uppercase font-serif">nurio34</p>
              <p className="text-sm text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                illum necessitatibus ııqwpd qpmdkn qkndqp
              </p>
            </div>
          </div>
          <div className="Background flex justify-center">
            <figure className="relative w-1/2 scale-150 origin-bottom">
              <Image src={"/css/infinite-slider/robot.webp"} alt="Alt" fill />
            </figure>
          </div>
        </div>
        <div className="Slider1 overflow-hidden">
          <ul
            ref={Slider1ContainerRef}
            className="Slider1_Container relative flex h-full"
            style={{
              width: containerWidth,
            }}
          >
            {Array(slider1Total)
              .fill("#")
              .map((_, index) => (
                <li
                  key={index}
                  className="Slider1_Item h-full"
                  style={
                    {
                      width: firstSliderItemWidth,
                      backgroundImage: `url("/css/infinite-slider/slider-1/slider1_${
                        index + 1
                      }.png")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPositionY: "50%",
                      "--width": firstSliderItemWidth,
                      "--index": index,
                      "--total": slider1Total,
                    } as React.CSSProperties
                  }
                />
              ))}
          </ul>
        </div>
        <div className="Slider2 overflow-hidden">
          <ul
            ref={Slider2ContainerRef}
            className="Slider2_Container relative flex h-full"
            style={{
              width: containerWidth,
            }}
          >
            {Array(slider2Total)
              .fill("#")
              .map((_, index) => (
                <li
                  key={index}
                  className="Slider2_Item h-full"
                  style={
                    {
                      height: secondSliderHeight,
                      width: secondSliderHeight + 32,
                      backgroundImage: `url("/css/infinite-slider/slider-2/slider2_${
                        index + 1
                      }.png")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      "--height": secondSliderHeight,
                      "--width": secondSliderHeight + 32,
                      "--index": index,
                      "--total": slider2Total,
                    } as React.CSSProperties
                  }
                />
              ))}
          </ul>
        </div>{" "}
      </div>
    </section>
  );
}
export default Client;
