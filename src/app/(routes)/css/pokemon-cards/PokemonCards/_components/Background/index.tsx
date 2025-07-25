function Background() {
  return (
    <div className="absolute w-full h-full top-0 left-0 -z-10">
      <div
        className="w-[500px] aspect-square absolute top-[5%] left-[5%] bg-primary/20"
        style={{
          borderTopLeftRadius: "100% 90%",
          borderTopRightRadius: "100% 50%",
          borderBottomLeftRadius: "100% 90%",
          borderBottomRightRadius: "100%",
        }}
      />
      <div
        className="w-[500px] aspect-square absolute top-[50%] -translate-y-1/2 right-[5%] bg-primary/20"
        style={{
          borderTopLeftRadius: "100% 50%",
          borderTopRightRadius: "100%",
          borderBottomLeftRadius: "100% 50%",
          borderBottomRightRadius: "100% 50%",
        }}
      />
    </div>
  );
}
export default Background;
