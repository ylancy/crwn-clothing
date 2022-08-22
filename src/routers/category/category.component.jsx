import './category.style.scss'
import { useContext, useEffect, useState, Fragment } from 'react';
import { CategoryContext } from '../../contexts/category.context';
import ProductCard from '../../components/product-card/product-card.component';
import { useParams } from 'react-router-dom';

const Category = () => {
    const { category } = useParams();
    const { categoryMap } = useContext(CategoryContext);
    const [products, setProducts] = useState(categoryMap[category]);

    useEffect(() => setProducts(categoryMap[category]), [category, categoryMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)}

            </div>
        </Fragment>
    )
}

export default Category;