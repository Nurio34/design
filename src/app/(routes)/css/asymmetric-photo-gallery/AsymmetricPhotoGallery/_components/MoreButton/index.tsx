import { useState } from "react";
import { useAsymmetricPhotoGalleryContext } from "../../Context";
import { getPhotosByCategoryAmount } from "@/app/_actions/unsplash/getPhotosByCategoryAmount";

function MoreButton() {
  const { setImagesState, category } = useAsymmetricPhotoGalleryContext();
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const images = await getPhotosByCategoryAmount(category, page, 30);
      setImagesState((prev) => [...prev, ...images]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error({ msg: "More photos download error !", error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      className={`btn btn-primary mb-4 ${
        isLoading ? "opacity-70 cursor-default" : ""
      }`}
      onClick={() => !isLoading && handleClick()}
    >
      {isLoading ? (
        <div className="flex items-center gap-x-2">
          <p>Getting More For You</p>
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : (
        "More"
      )}
    </button>
  );
}
export default MoreButton;
