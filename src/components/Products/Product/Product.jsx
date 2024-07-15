import React from "react";
import "./Product.scss";

const Product = ({ name, price, imgSrc }) => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={imgSrc} alt={name} />
            </div>
            <div className="prod-details">
                <span className="name">{name}</span>
                <span className="price">&#8377;{price}</span>
            </div>
        </div>
    );
};

export default Product;
