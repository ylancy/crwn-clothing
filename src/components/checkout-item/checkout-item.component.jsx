import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.style.scss'

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    const { clearItemFromCart, addItemToCart, removeItemToCart, total } = useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemToCart(item)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItemToCart(item)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(item)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;