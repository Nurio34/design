function InvertedBorder() {
  return (
    <div className="h-[600px] flex justify-center">
      <div className="relative w-[900px] h-full">
        <div
          className="absolute top-0 left-0 bg-linear-90 from-primary/50 to-accent/50 w-[195px] h-[95px] rounded-[25px]
            flex justify-center items-center text-4xl font-semibold
        "
        >
          Istanbul
        </div>
        <div className="InvertedBorder h-full" />
        <div
          className="absolute bottom-0 right-0 bg-linear-90 from-info/50 to-secondary/50 w-[195px] h-[95px] rounded-[25px]
            flex justify-center items-center text-4xl font-semibold
        "
        >
          {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
export default InvertedBorder;
