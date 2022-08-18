import { useState, createContext } from "react";
import productdata from '../shop-data.json'

export const ProductContext = createContext({
    product: [],
});

export const ProductProvider = ({ children }) => {
    const [product, setproduct] = useState(productdata);
    const value = { product };
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
} 