import { useState, createContext } from "react";
import productdata from '../shop-data.json'

export const ProductContext = createContext({
    product: [],
});

export const ProductProvider = ({ Children }) => {
    const [product, setproduct] = useState(productdata);
    const value = { product };
    return (
        <ProductContext.Provider value={value}>{Children}</ProductContext.Provider>
    )
} 