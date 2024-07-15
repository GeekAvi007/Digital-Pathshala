import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";

const Cart = ({ setShowCart }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Product Name",
            image: "path_to_image",
            price: 1234,
            quantity: 1,
        },
        // Add more items as needed
    ]);

    const updateQuantity = (id, quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeItem = id => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setSubtotal(total);
    }, [cartItems]);

    return (
        <div className="cart-panel">
            <div className="opac-layer" onClick={() => setShowCart(false)}></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose />
                        <span className="text">close</span>
                    </span>
                </div>

                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No Products in the Cart</span>
                        <button className="return-cta" onClick={() => setShowCart(false)}>RETURN TO SHOP</button>
                    </div>
                ) : (
                    <>
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                updateQuantity={updateQuantity}
                                removeItem={removeItem}
                            />
                        ))}
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal</span>
                                <span className="text-total">&#8377;{subtotal}</span>
                            </div>
                            <div className="button">
                                <button className="checkout-cta">checkout</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
