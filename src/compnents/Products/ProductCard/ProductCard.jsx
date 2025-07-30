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
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              {/* Like  */}
              <div className="flex justify-center items-center gap-1.5">
                <span>
                  <i class="bi bi-hand-thumbs-up"></i>
                  {/* <i className="bi bi-hand-thumbs-up-fill"></i> */}
                </span>
                <small>2.2k</small>
              </div>
              {/* Love  */}
              <div className="flex justify-center items-center gap-1.5">
                <span>
                  {/* <i class="bi bi-heart-fill"></i> */}
                  <i className="bi bi-heart"></i>
                </span>
                <small>2.2k</small>
              </div>
              {/* yelp  */}
              <div className="flex justify-center items-center gap-1.5">
                <span>
                  {/* <i className="bi bi-yelp text-red-600"></i> */}
                  <i className="bi bi-yelp text-green-500"></i>
                </span>
                <small>2.2k</small>
              </div>
            </div>
            <div className="flex justify-center items-center gap-1.5">
              <div>
                <i className="bi bi-star"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <div>
                <small>136</small> <small>reviews</small>
              </div>
            </div>
          </div>
          <div>
            <h3
              key={product.id + 3}
              className="product__name font-semibold -mt-2 mb-2 text-2xl font-semibold"
            >
              Head Phone
              {product.title}
            </h3>
            <p>
              <span className="dot green"></span>
              <span className="dot black"></span>
              <span className="dot red"></span>
            </p>
          </div>

          <p key={product.id + 4} className="product__description ">
            {/* {product.description.slice(0, 50)}.... */}
            {/* to={product.id}  */}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt facilis cupiditate ut quas in earum asperiores alias
            reprehenderit, debitis atque eius accusamus architecto.
            <Link to="/product-details" key={product.id} className="learn-more">
              Learn More
            </Link>
          </p>
          <h4 key={product.id + 5} className="product__price">
            $ 570{product.price}
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
