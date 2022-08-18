import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.style.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <span className='itme-count '>0</span>
        </div>
    )
}

export default CartIcon;