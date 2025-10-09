import "./index.css";

function Header() {
  return (
    <header className="overflow-hidden text-center space-y-4 text-white">
      <h1 className="font-extrabold text-6xl">Image Library Showcase</h1>
      <p className="font-semibold text-xl">Click to reveal the magic ✨</p>
      <div
        className="Carets font-extrabold text-xl"
        style={{ letterSpacing: "-2px" }}
      >
        {">>"}
      </div>
    </header>
  );
}
export default Header;
