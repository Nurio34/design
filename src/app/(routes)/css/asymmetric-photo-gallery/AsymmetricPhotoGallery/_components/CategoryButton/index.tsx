import { Category } from "@/app/_actions/unsplash/_type";
import { useAsymmetricPhotoGalleryContext } from "../../Context";
import { getPhotosByCategoryAmount } from "@/app/_actions/unsplash/getPhotosByCategoryAmount";

function CategoryButton({ category }: { category: Category }) {
  const {
    setImagesState,
    setIsNewCategoryLoading,
    isNewCategoryLoading,
    setCategory,
  } = useAsymmetricPhotoGalleryContext();

  const handleClick = async () => {
    try {
      setIsNewCategoryLoading(true);
      const images = await getPhotosByCategoryAmount(category, 1, 30);
      setImagesState(images);
      setCategory(category);
    } catch (error) {
      console.error({ msg: "Category change error !", error });
    } finally {
      setIsNewCategoryLoading(false);
    }
  };

  return (
    <li>
      <button
        className={`btn btn-sm btn-secondary ${
          isNewCategoryLoading ? "opacity-70" : "opacity-100"
        } `}
        onClick={() => !isNewCategoryLoading && handleClick()}
      >
        {category}
      </button>
    </li>
  );
}
export default CategoryButton;
