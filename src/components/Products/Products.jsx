import React from "react";
import "./Products.scss";
import Product from "./Product/Product";
import prod from "../../assets/products/JEE.jpeg";
import prod1 from "../../assets/products/NEET.jpeg";
import prod2 from "../../assets/products/ICSE8.jpeg";
import prod3 from "../../assets/products/ICSEB.jpeg";

const products = [
    { id: 1, name: "JEE", price: 1000, imgSrc: prod },
    { id: 2, name: "NEET", price: 1200, imgSrc: prod1 },
    { id: 3, name: "ICSE CLASS 8", price: 900, imgSrc: prod2 },
    { id: 4, name: "ICSE CLASS 10", price: 900, imgSrc: prod3 },
];

const Products = ({ innerPage  }) => {
    return (
        <div className="products-container">
            <div className="sec-heading">Popular Products</div>
            <div className="products">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        imgSrc={product.imgSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
