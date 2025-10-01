import Bottom from "./_components/Bottom";
import Left from "./_components/Left";
import Right from "./_components/Right";
import Top from "./_components/Top";
import "./_css/index.css";

function Client() {
  return (
    <section className="PerspectiveAnimation Section h-full">
      <Top />
      <Bottom />
      <Right />
      <Left />
    </section>
  );
}
export default Client;
