import React from "react";
import { Link } from "react-router";
import "./ProductCard.css";
import imges from "../../../assets/images/headphone.jpg";
const ProductCard = () => {
  const product = "";
  return (
    <>
      <article key={product.id + 0} className="product card">
        {/* to={product.id}  */}
        <Link to="/product-details" key={product.id + 1}>
          <div className="badge">
            <span>5 in stock</span>
            <hr className="hr-design" />
            <span>3 sold</span>
          </div>
          <img
            key={product.id + 2}
            className="product__img"
            src={imges}
            alt="Headphone"
          />
        </Link>
        <div className="product__body">
          <h3 key={product.id + 3} className="product__name font-semibold">
            {product.title}
          </h3>
          <p>
            <span className="dot green"></span>
            <span className="dot black"></span>
            <span className="dot red"></span>
          </p>
          <p key={product.id + 4} className="product__description ">
            {/* {product.description.slice(0, 50)}.... */}
            {/* to={product.id}  */}
            <Link to="/product-details" key={product.id} className="learn-more">
              Learn More
            </Link>
          </p>
          <h4 key={product.id + 5} className="product__price">
            ${product.price}
          </h4>
          <p className="product__rating">Rating 4.5/5</p>
          <div
            // onClick={() => dispatch(addToCart(product))}
            to={"/cart?paramName=" + product.id}
            className="btn text-center"
          >
            <button
              // onClick={() => dispatch(addToCart(product))}
              className="hover:font-semibold"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductCard;
