import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItem, productToAdd) => {
    // find if cartItem contains productItem
    const existingCartItem = cartItem.find(
        (item) => item.id === productToAdd.id
    );
    // if found, increase quantity
    if (existingCartItem) {
        return cartItem.map((item) =>
            item.id === productToAdd.id ?
                { ...item, quantity: item.quantity + 1 } :
                item
        )
    }
    // return new array
    return [...cartItem, { ...productToAdd, quantity: 1 }]
};

const removeCartItem = (cartItem, cartItemToRemove) => {
    // find the item to remove
    const existingCartItem = cartItem.find(
        (item) => item.id === cartItemToRemove.id
    );
    // if quantity =1, remove the item
    if (existingCartItem.quantity === 1) {
        return cartItem.filter((item) => item.id !== cartItemToRemove.id)
    }
    // return the array with reduced quantity
    return cartItem.map((item) => item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } :
        item
    )
}

const clearCartItem = (cartItem, cartItemToClear) => {
    // remove the item
    return cartItem.filter((item) => item.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItem: [],
    addItemToCart: () => { },
    removeItemToCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    total: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItem.reduce((total, item) => total + item.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItem]);

    useEffect(() => {
        const newTotal = cartItem.reduce((total, item) => total + item.quantity * item.price, 0);
        setTotal(newTotal);
    }, [cartItem]);

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItem, productToAdd));
    };

    const removeItemToCart = (cartItemToRemove) => {
        setCartItem(removeCartItem(cartItem, cartItemToRemove));
    };

    const clearItemFromCart = (cartItemToClear) => {
        setCartItem(clearCartItem(cartItem, cartItemToClear));
    };

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItem, cartCount, removeItemToCart, clearItemFromCart, total };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}