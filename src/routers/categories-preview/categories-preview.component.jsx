import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoryContext } from '../../contexts/category.context';
import { useContext, Fragment } from "react";
import './categories-preview.style.scss'



const CategoriesPreview = () => {
    const { categoryMap } = useContext(CategoryContext);
    return (
        <Fragment>
            < div className='category-preview-container'>
                {
                    Object.keys(categoryMap).map((title) => {
                        const products = categoryMap[title];
                        return <CategoryPreview key={title} title={title} products={products} />
                    })
                }
            </div >
        </Fragment>
    )
}

export default CategoriesPreview;


