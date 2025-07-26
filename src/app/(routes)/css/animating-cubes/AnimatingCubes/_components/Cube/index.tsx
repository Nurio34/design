import "./_css/index.css";

function Cube({ index }: { index: number }) {
  return (
    <div
      className="AnimatingCubes Cube Cont relative w-10 aspect-square transform-3d"
      style={
        {
          "--i": index,
        } as React.CSSProperties
      }
    >
      <div className="AnimatingCubes Cube Top absolute w-full h-full" />
      <div className="AnimatingCubes Cube Front absolute w-full h-full" />
      <div className="AnimatingCubes Cube Side absolute w-full h-full" />
    </div>
  );
}
export default Cube;
