import { UnsplashPhoto } from "./_types/unsplashPhoto";

function Client({ images }: { images: UnsplashPhoto }) {
  console.log(images);

  return <div>Client</div>;
}
export default Client;
