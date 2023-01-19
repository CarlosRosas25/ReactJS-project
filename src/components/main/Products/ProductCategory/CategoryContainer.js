import { useParams } from "react-router-dom";
import CategoryList from "./CategoryList";

const CategoryContainer = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <CategoryList category={categoryId} />
    </div>
  );
};

export default CategoryContainer;
