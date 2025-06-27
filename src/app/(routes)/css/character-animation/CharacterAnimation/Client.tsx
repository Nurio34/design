import { useEffect, useRef, useState } from "react";
import { useCharacterAnimationContext } from "./Context";
import "./_css/index.css";

type CurrentAction = "Stand" | "Step" | "Die" | "Attack" | "Defence" | "Walk";

function Client() {
  const { imageState } = useCharacterAnimationContext();
  const { isLoading, image, src, width, height } = imageState;
  const isLoaded = !isLoading && image && src && width && height;

  const ImageContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentAction, setCurrentAction] = useState<CurrentAction>("Stand");
  const timeout = useRef<NodeJS.Timeout>(null);
  const [walkState, setWalkState] = useState({
    right: false,
    left: false,
  });
  const { right, left } = walkState;
  const [x, setX] = useState(0);

  useEffect(() => {
    const imageContainer = ImageContainerRef.current;

    if (!imageContainer) return;

    imageContainer.classList.add(currentAction);

    switch (currentAction) {
      case "Stand":
        imageContainer.classList.add("Stand");

      case "Step":
        timeout.current = setTimeout(() => {
          imageContainer.classList.remove(currentAction);
          imageContainer.classList.add("Stand");
        }, 400);
        break;

      case "Attack":
        timeout.current = setTimeout(() => {
          imageContainer.classList.remove(currentAction);
          imageContainer.classList.add("Stand");
        }, 1000);
        break;

      default:
        break;
    }

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [isLoaded, currentAction]);

  useEffect(() => {
    const imageContainer = ImageContainerRef.current;

    const handleKeydown = (e: KeyboardEvent) => {
      if (!imageContainer) return;

      const key = e.code;

      if (key === "KeyE") {
        imageContainer.classList.remove(currentAction);
        setCurrentAction("Step");
      } else if (key === "KeyD") {
        imageContainer.classList.remove(currentAction);
        setCurrentAction("Walk");
        setWalkState((prev) => ({ ...prev, right: true }));
      } else if (key === "KeyA") {
        imageContainer.classList.remove(currentAction);
        setCurrentAction("Walk");
        setWalkState((prev) => ({ ...prev, left: true }));
      } else if (key === "KeyF") {
        imageContainer.classList.remove(currentAction);
        setCurrentAction("Attack");
      }
    };

    window.addEventListener("keydown", handleKeydown);

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!imageContainer) return;
      const key = e.code;

      if (key === "KeyD") {
        setWalkState((prev) => ({ ...prev, right: false }));
      } else if (key === "KeyA") {
        setWalkState((prev) => ({ ...prev, left: false }));
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isLoaded]);

  useEffect(() => {
    const imageContainer = ImageContainerRef.current;
    if (!imageContainer) return;

    const isWalkingEnded = Object.values(walkState).every((state) => !state);
    if (isWalkingEnded) {
      imageContainer.classList.remove(currentAction);
      setCurrentAction("Stand");
    }
  }, [walkState]);

  useEffect(() => {
    if (!width) return;

    const animate = () => {
      if (right) {
        if (x >= innerWidth - width) return;
        setX((prev) => prev + 2);
      } else {
        if (x === 0) return;
        setX((prev) => prev - 2);
      }
    };

    animate();
  }, [right, width]);

  if (!isLoaded) return <div>Loading</div>;

  return (
    <section className="h-full relative">
      <div
        ref={ImageContainerRef}
        className="absolute top-1/2 CurrentAction_ImageContainer transition-all"
        style={
          {
            width,
            height,
            // width: "100vw",
            // height: "100vh",
            "--src": `url(${src})`,
            "--x": width,
            "--y": height,
            transform: `rotateY(${left ? 180 : 0}deg)`,
            left: x,
          } as React.CSSProperties
        }
      />
    </section>
  );
}
export default Client;
