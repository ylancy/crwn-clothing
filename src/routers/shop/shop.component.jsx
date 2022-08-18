
import { ProductContext } from "../../contexts/product.context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.style.scss';

const Shop = () => {
    const { product } = useContext(ProductContext);
    return (
        <div className="product-container">
            {product.map((product) => (
                <ProductCard key={product.id} product={product} />

            ))}
        </div>
    )
}

export default Shop;