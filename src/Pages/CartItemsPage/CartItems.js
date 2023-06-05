import { v4 as uuid } from "uuid";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillSecurityScan } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";

import "./cartItems.css";
import lighting from "../../Images/decor/lighting.webp";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const cartItem = [
  {
    id: uuid(),
    image: lighting,
    title: "MFD HOME FURNISHING",
    description: "H-L - 5552-3P Glass",
    rating: "5.0",
    discountPrice: 3360,
    actualPrice: 8400,
    discountPercentage: 60,
    categoryName: "decor",
    details:
      "Black Metal & Luster Glass Quirky Design Cluster Light by MFD HOME FURNISHING",
  },
];
export default function CartItems() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="page">
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="cartItems">
          <div>
            {cartItem.map((product) => (
              <div className="item">
                <div>
                  <img
                    className="cartItemImage"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="quantityButtons">
                    <span>
                      <button
                        className="btn"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </span>
                    <span>
                      <button className="quantityBtn">{quantity}</button>
                    </span>
                    <span>
                      <button
                        className="btn"
                        onClick={() => setQuantity(quantity - 1)}
                      >
                        -
                      </button>
                    </span>
                  </div>
                </div>
                <div className="itemDetails">
                  <h3>{product.title}</h3>
                  {product.description}
                  <br />
                  <div>
                    <span className="discountPrice">
                      ₹{product.discountPrice}
                    </span>
                    <span className="actualPrice"> ₹{product.actualPrice}</span>
                    <span className="discountPercentage">
                      {" "}
                      {product.discountPercentage}% Off
                    </span>
                  </div>
                  <span>
                    <SecondaryButton name="Remove" />
                  </span>
                  <span>
                    <SecondaryButton name="Move to Wishlist" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="placeOrderContainer">
            <button className="placeOrder">Place Order</button>
          </div>
        </div>
        <div className="priceDetails">
          <p className="priceDetailsHeading">PRICE DETAILS</p>
          <hr />
          <p className="displayPrice">Price(no of items) </p>
          <p className="displayPrice">Discount </p>
          <p className="displayPrice">Delivery Charges </p>
          <hr className="hr2" />
          <p className="totalAmount">Total Amount</p>
          <hr className="hr2" />
          <div className="savingAmount">
            <span className="circleIcon">
              <BsFillCheckCircleFill />
            </span>
            Yay! You are saving Discount amount
          </div>
          <section className="saftyMessage">
            <div className="msg">
              <span className="msgicon">
                <BsFillCheckCircleFill />
              </span>
              <p>
                Genuine <br /> products
              </p>
            </div>
            <div className="msg">
              <span className="msgicon">
                <AiFillSecurityScan />
              </span>
              <p>
                Secure <br /> payments
              </p>
            </div>
            <div className="msg">
              <span className="msgicon">
                <TbTruckReturn />
              </span>
              <p>
                Easy <br />
                returns
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
