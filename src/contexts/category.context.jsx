import { useState, createContext, useEffect } from "react";
// import { addCollectionAndDoc } from "../utiles/firebase/firebase.util";
// import SHOP_DATA from "../shop-data";
import { getCategoriesAndDoc } from "../utiles/firebase/firebase.util";

export const CategoryContext = createContext({
    categoryMap: {},
});

export const CategoryProvider = ({ children }) => {
    const [categoryMap, setCategoryMap] = useState({});
    // useEffect(() => {
    //     addCollectionAndDoc("categories", SHOP_DATA);
    // }, []);
    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDoc();
            setCategoryMap(categoryMap);
        }
        getCategoryMap();
    }, []);
    const value = { categoryMap };
    return (
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    )
} 