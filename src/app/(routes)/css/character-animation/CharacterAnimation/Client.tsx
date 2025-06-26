import { useCharacterAnimationContext } from "./Context";

function Client() {
  const { imageState } = useCharacterAnimationContext();
  const { isLoading, image, src, width, height } = imageState;

  if (isLoading || !image || !src || !width || !height)
    return <div>Loading</div>;

  return (
    <section className="h-full">
      <div
        className="border"
        style={{
          width,
          height,
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${0 * width}px ${0 * height}px`,
        }}
      />
    </section>
  );
}
export default Client;
