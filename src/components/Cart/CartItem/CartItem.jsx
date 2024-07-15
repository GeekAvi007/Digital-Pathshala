import React from "react";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";

const CartItem = ({ item, updateQuantity, removeItem }) => {
    const handleIncrease = () => {
        updateQuantity(item.id, item.quantity + 1);
    };

    const handleDecrease = () => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        }
    };

    return (
        <div className="cart-products">
            <div className="search-result-item">
                <div className="image-container">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="prod-details">
                    <span className="name">{item.name}</span>
                    <MdClose className="close-btn" onClick={() => removeItem(item.id)} />
                    <div className="quantity-buttons">
                        <span onClick={handleDecrease}>-</span>
                        <span>{item.quantity}</span>
                        <span onClick={handleIncrease}>+</span>
                    </div>
                    <div className="text">
                        <span>{item.quantity}</span>
                        <span>x</span>
                        <span>&#8377;{item.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
