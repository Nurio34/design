import { useEffect, useRef, useState } from "react";
import { useCharacterAnimationContext } from "./Context";
import "./_css/index.css";
import { AnimationState } from "./_moves";

type CurrentAction = "stand" | "step" | "die" | "attack" | "defence" | "walk";

function Client() {
  const { imageState } = useCharacterAnimationContext();
  const { isLoading, image, src, width, height, moves } = imageState;
  const isLoaded = !isLoading && image && src && width && height;

  const [animationState, setAnimationState] = useState({} as AnimationState);
  const { row, frames, timeParameter } = animationState;
  const [currentAction, setCurrentAction] = useState<CurrentAction>("stand");

  const timeout = useRef<NodeJS.Timeout>(null);
  const [walkingState, setWalkingState] = useState({
    right: false,
    left: false,
    x: 0,
  });
  const interval = useRef<NodeJS.Timeout>(null);
  const ImageContainerRef = useRef<HTMLDivElement | null>(null);
  const [characterPosition, setCharacterPosition] = useState<{
    bottom: number | undefined;
  }>({ bottom: undefined });

  useEffect(() => {
    const { stand } = moves;
    setAnimationState(stand);
  }, [moves]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const key = e.code;
      const { step, attack, defence, walk } = moves;
      switch (key) {
        case "KeyE":
          setCurrentAction("step");
          setAnimationState(step);
          break;
        case "KeyF":
          setCurrentAction("attack");
          setAnimationState(attack);
          break;
        case "KeyR":
          setCurrentAction("defence");
          setAnimationState(defence);
          break;
        case "KeyD":
          setCurrentAction("walk");
          setAnimationState(walk);
          setWalkingState((prev) => ({ ...prev, right: true }));
          break;
        case "KeyA":
          setCurrentAction("walk");
          setAnimationState(walk);
          setWalkingState((prev) => ({ ...prev, left: true }));
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeydown);

    const handleKeyup = (e: KeyboardEvent) => {
      if (timeout.current) clearInterval(timeout.current);
      const key = e.code;
      const { stand, step, attack, defence } = moves;

      switch (key) {
        case "KeyE":
          timeout.current = setTimeout(() => {
            setCurrentAction("stand");
            setAnimationState(stand);
          }, step.frames * step.timeParameter * 1000);
          break;

        case "KeyF":
          timeout.current = setTimeout(() => {
            setCurrentAction("stand");
            setAnimationState(stand);
          }, attack.frames * attack.timeParameter * 1000);
          break;

        case "KeyR":
          timeout.current = setTimeout(() => {
            setCurrentAction("stand");
            setAnimationState(stand);
          }, defence.frames * defence.timeParameter * 1000);
          break;
        case "KeyD":
          setCurrentAction("stand");
          setAnimationState(stand);
          setWalkingState((prev) => ({ ...prev, right: false }));

          break;
        case "KeyA":
          setCurrentAction("stand");
          setAnimationState(stand);
          setWalkingState((prev) => ({ ...prev, left: false }));

          break;

        default:
          break;
      }
    };

    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [moves]);

  useEffect(() => {
    if (!isLoaded) return;

    const { right, left } = walkingState;

    if (right) {
      if (interval.current) clearInterval(interval.current);

      interval.current = setInterval(() => {
        setWalkingState((prev) => {
          if (prev.x >= innerWidth - width * 2) return prev;
          return { ...prev, x: prev.x + 1 };
        });
      }, 1000 / 60);
    }
    if (left) {
      if (interval.current) clearInterval(interval.current);

      interval.current = setInterval(() => {
        setWalkingState((prev) => {
          if (prev.x <= width) return prev;
          return { ...prev, x: prev.x - 1 };
        });
      }, 1000 / 60);
    }

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [walkingState, isLoaded, width]);

  useEffect(() => {
    if (!isLoaded) return;

    const character = ImageContainerRef.current;
    if (!character) return;

    const bottom = character.getBoundingClientRect().top + height / 2 - 5;
    setCharacterPosition((prev) => ({ ...prev, bottom }));
  }, [isLoaded, height]);

  if (!isLoaded) return <div>Loading</div>;

  return (
    <section className="h-full relative overflow-hidden">
      <div
        ref={ImageContainerRef}
        className="absolute top-1/2 CurrentAction_ImageContainer"
        style={
          {
            width,
            height,
            // width: "100vw",
            // height: "100vh",
            "--src": `url('${src}')`,
            "--step": frames,
            "--y": row,
            "--w": width,
            "--h": height,
            "--time": timeParameter * frames,
            left: walkingState.x,
            transform: `rotateY(${walkingState.left ? 180 : 0}deg)`,
          } as React.CSSProperties
        }
      />
      {characterPosition.bottom && (
        <div
          className="absolute h-[350px] w-full"
          style={{
            top: characterPosition.bottom,
            backgroundImage: "url('/css/character-animation/ground.webp')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPositionX: walkingState.x * -1,
          }}
        />
      )}
    </section>
  );
}
export default Client;
