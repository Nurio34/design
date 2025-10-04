function ProgressState({ progress }: { progress: number }) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl overflow-y-hidden">
      <div
        className={`transition-transform duration-[3s] ease-in-out ${
          progress === 100 ? "-translate-y-full" : ""
        }`}
      >
        {progress.toFixed(0)}%
      </div>
    </div>
  );
}
export default ProgressState;
