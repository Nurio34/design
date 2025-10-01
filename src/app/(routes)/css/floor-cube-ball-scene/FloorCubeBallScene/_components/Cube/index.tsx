function Cube() {
  return (
    <div className="Cube absolute">
      <div className="CubePart Right" />
      <div className="CubePart Left" />
      <div className="CubePart Front" />
      <div className="CubePart Back" />
      <div className="CubePart Top">
        <div className="ShadowLayer" />
      </div>
      <div className="CubePart Bottom" />
    </div>
  );
}
export default Cube;
