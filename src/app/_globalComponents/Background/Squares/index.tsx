import "./index.css";

function Squares({ clr1, clr2 }: { clr1: string; clr2: string }) {
  return (
    <div
      className="Background_PinkPurple"
      style={{ "--clr1": clr1, "--clr2": clr2 } as React.CSSProperties}
    />
  );
}
export default Squares;
