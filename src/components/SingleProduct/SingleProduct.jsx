import React from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import prod from "../../assets/products/JEE.jpeg";
import prod1 from "../../assets/products/NEET.jpeg";
import prod2 from "../../assets/products/ICSE8.jpeg";
import prod3 from "../../assets/products/ICSEB.jpeg";

const products = [
    { id: 1, name: "JEE", price: 1000, imgSrc: prod, desc: "Description for JEE" },
    { id: 2, name: "NEET", price: 1200, imgSrc: prod1, desc: "Description for NEET" },
    { id: 3, name: "ICSE CLASS 8", price: 900, imgSrc: prod2, desc: "Description for ICSE CLASS 8" },
    { id: 4, name: "ICSE CLASS 10", price: 900, imgSrc: prod3, desc: "Description for ICSE CLASS 10" },
];

const SingleProduct = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={product.imgSrc} alt={product.name} />
                    </div>
                    <div className="right">
                        <span className="name">{product.name}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">{product.desc}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span> Books</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;
