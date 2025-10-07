import "./_css/index.css";

function Client() {
  return (
    <section className="AnimatedGlowingBorder h-full">
      <div className="Container">
        <div className="Background h-full grid">
          <div className="Top flex">
            <div className="First h-full grow"></div>
            <div className="Second h-full grow"></div>
            <div className="Thirst h-full grow"></div>
          </div>
          <div className="Bottom flex">
            <div className="First h-full grow"></div>
            <div className="Second h-full grow"></div>
            <div className="Thirst h-full grow"></div>
          </div>
        </div>
        <div className="Content w-full grid grid-cols-2 justify-center">
          <div>s</div>
          <div className="grid place-content-center gap-y-[2vh] text-center pr-[3vw]">
            <h1 className="font-bold text-2xl">AI Powered</h1>
            <p className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              impedit ab aliquam totam, esse quae quia provident dolorum
              incidunt vero, enim voluptatum consequatur et distinctio at sed
              possimus aperiam ipsam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Client;
