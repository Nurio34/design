import "./_css/index.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/store/hooks";

function Card({
  image,
  index,
  activeCardIndex,
  setActiveCardIndex,
}: {
  image: string;
  index: number;
  activeCardIndex: number | undefined;
  setActiveCardIndex: Dispatch<SetStateAction<number | undefined>>;
}) {
  const { sectionSize } = useAppSelector((s) => s.modals);
  const { width: sectionWidth, height: sectionHeigt } = sectionSize;

  const CardRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{
    top: number | undefined;
    left: number | undefined;
  }>({ top: undefined, left: undefined });
  const CenterRef = useRef<{ x: number | undefined; y: number | undefined }>({
    x: undefined,
    y: undefined,
  });
  const [isActive, setIsActive] = useState(false);
  const active = isActive && activeCardIndex === index;
  const [deg, setDeg] = useState({ x: 0, y: 0 });
  const [isExploring, setIsExploring] = useState(false);
  const [isTransitioned, setIsTransitioned] = useState(true);
  const [lighterWidth, setLighterWidth] = useState<number | undefined>(
    undefined
  );
  const [isLighterOpen, setIsLighterOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({ x: undefined, y: undefined });

  useEffect(() => {
    if (!CardRef.current) return;
    if (!sectionWidth || !sectionHeigt) return;

    const top = CardRef.current.getBoundingClientRect().top;
    const left = CardRef.current.getBoundingClientRect().left;
    setPosition({ top, left });

    const width = CardRef.current.getBoundingClientRect().width;
    const height = CardRef.current.getBoundingClientRect().height;
    const centerX = sectionWidth / 2 - width / 2;
    const centerY = sectionHeigt / 2 - height / 2;
    CenterRef.current = { x: centerX, y: centerY };

    setLighterWidth((width * 4) / 6);
  }, [sectionWidth, sectionHeigt]);

  useEffect(() => {
    if (activeCardIndex !== index) setIsActive(false);
  }, [activeCardIndex, index]);

  const handleClick = () => {
    const card = CardRef.current;
    const center = CenterRef.current;
    const { x, y } = center;

    if (!card || !x || !y) return;

    if (!isActive) {
      setIsActive(true);
      setIsExploring(true);
      setActiveCardIndex(index);
      setIsLighterOpen(true);
    } else {
      setIsActive(false);
      setIsExploring(false);
      setActiveCardIndex(undefined);
    }
  };

  return (
    <div
      ref={CardRef}
      className="w-48 h-64 rounded-xl cursor-pointer overflow-hidden"
      style={
        {
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: active ? 10 : 1,
          transform: `translateX(${
            active ? CenterRef.current!.x! - position.left! : 0
          }px) translateY(${
            active ? CenterRef.current!.y! - position.top! : 0
          }px) translateZ(${active ? 145 : 0}px) scale(${
            active ? 2 : 1
          }) rotateY(${isExploring ? deg.x : 0}deg) rotateX(${
            isExploring ? deg.y : 0
          }deg)`,
          transitionDuration: isTransitioned ? "400ms" : "100ms",
        } as React.CSSProperties
      }
      onClick={handleClick}
      onMouseLeave={() => {
        setDeg({ x: 0, y: 0 });
      }}
      onMouseMove={(e) => {
        const card = e.currentTarget.getBoundingClientRect();
        const { left, top, width, height } = card;

        const x = e.clientX;
        const y = e.clientY;
        setCursorPosition({ x, y });

        const xParam = width / 60;
        const xDeg = +(-1 * ((x - left) / xParam - 30)).toFixed(0);

        const yParam = height / 60;
        const yDeg = +(-1 * ((y - top) / yParam - 30)).toFixed(0);

        setDeg({ x: xDeg, y: yDeg });

        if (isActive) setIsTransitioned(false);
      }}
      onMouseDown={() => {
        if (isActive) setIsTransitioned(true);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        if (isLighterOpen) setIsLighterOpen(false);
        else setIsLighterOpen(true);
      }}
    >
      {isActive && isLighterOpen && (
        <div
          className="absolute w-4/6 aspect-square rounded-full bg-white/10"
          style={{
            left: cursorPosition.x! - CenterRef.current.x! - lighterWidth! / 2,
            top: cursorPosition.y! - CenterRef.current.y! - lighterWidth! / 2,
            backdropFilter: "brightness(150%)",
          }}
        />
      )}
    </div>
  );
}
export default Card;
