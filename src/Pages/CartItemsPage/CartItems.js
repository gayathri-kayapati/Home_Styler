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
import cookWare from "../../Images/kichenAndDinning/cookWare.webp";
import candles from "../../Images/decor/candles.webp";

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
  {
    id: uuid(),
    image: cookWare,
    title: "Zyliss",
    description: "Ultimate Pro 24cm Frying Pan with Por spout",
    rating: "4.0",
    discountPrice: "₹8,460",
    actualPrice: "₹9,400",
    discountPercentage: "10%",
    categoryName: "kichen & Dinning",
    details:
      "Zyliss best cookware yet! Zyliss 24cm frying pan feature advanced ALPINE CRYSTALS non-stick Swiss technology that delivers superior non-stick performance and healthier cooking, eliminating the need for oil or butter. With the hard anodized body, Zyliss Ultimate PRO Frying Pans are reliable, designed to withstand everyday use and safe for use with metal tools.Zyliss Swiss-engineered PFAO free non-stick coating: nothing sticks and no oil or butter needed!With a durable hard-anodized body, this professional frying pan is hard wearing and safe for use with metal tools.The stainless steel induction base is suitable for all hobs, including induction.Ergonomic, stainless steel handle for a durable and comfortable grip, and oven safe up to 230°C/450°F.Pouring spout for convenient transfer of liquids, such as fats, oils, or sauces.",
  },
  {
    id: uuid(),
    image: candles,
    title: "Novo Koyo",
    description: "God's Plan Travel Tin Candle",
    rating: "4.5",
    discountPrice: "₹1,100",
    actualPrice: "",
    discountPercentage: "",
    categoryName: "decor",
    details:
      "Novo Koyo God's Plan Travel Tin candle is a complex concoction of Sandalwood Musk & Vanilla. Soothing yet impactful, this candle is for the ones who love the sublimity of Vanilla while appreciating the depth of sandalwood. Carry it on a stay-cation or use it for a date night! Please burn the candle for 2 hours, the first time that you'd light it, for the candle to burn in the best possible way & to avoid tunelling in the jar. (L x W x H): 3.5 x 3.5 x 2.5 inches",
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
          <section className="safetyMessage">
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
