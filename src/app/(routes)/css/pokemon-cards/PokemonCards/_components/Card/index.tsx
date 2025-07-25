import "./_css/index.css";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAppSelector } from "@/store/hooks";

function Card({
  image,
  index,
  isAnyCardActivated,
  setIsAnyCardActivated,
  activeCardIndex,
  setActiveCardIndex,
}: {
  image: string;
  index: number;
  isAnyCardActivated: boolean;
  setIsAnyCardActivated: Dispatch<SetStateAction<boolean>>;
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
  console.log(deg);

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
  }, [sectionWidth]);

  useEffect(() => {
    if (activeCardIndex !== index) setIsActive(false);
  }, [activeCardIndex]);

  const handleClick = () => {
    const card = CardRef.current;
    const center = CenterRef.current;
    const { x, y } = center;

    if (!card || !x || !y) return;

    setIsAnyCardActivated(true);
    if (!isActive) {
      setIsActive(true);
      setActiveCardIndex(index);
    } else {
      setIsActive(false);
      setActiveCardIndex(undefined);
    }
  };

  return (
    <div
      ref={CardRef}
      className="w-48 h-64 rounded-xl overflow-hidden transition-al"
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
          }px) translateZ(${active ? 0 : -48}px) scale(${
            active ? 2 : 1
          }) rotateY(${deg.x}deg)`,
          transitionDuration: isExploring ? 0 : "500ms",
        } as React.CSSProperties
      }
      onClick={handleClick}
      onMouseEnter={() => setIsExploring(true)}
      onMouseLeave={() => {
        setIsExploring(false);
        setDeg({ x: 0, y: 0 });
      }}
      onMouseMove={(e) => {
        const card = e.currentTarget.getBoundingClientRect();
        const { left, top, width, height } = card;

        const x = e.clientX;
        const y = e.clientY;

        const isAtTop = y >= top && y <= top + height / 2;
        const isAtBottom = !isAtTop;
        const isAtLeft = x >= left && x <= left + width / 2;
        const isAtRight = !isAtLeft;

        const xParam = width / 90;
        let xDeg = +(-1 * ((x - left) / xParam - 45)).toFixed(0);

        setDeg({ x: xDeg, y: 0 });
      }}
    />
  );
}
export default Card;
