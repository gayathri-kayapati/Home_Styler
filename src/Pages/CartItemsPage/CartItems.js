import { useContext } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillSecurityScan } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";

import "./cartItems.css";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import { CartContext } from "../../Contexts/CartContextProvider";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { WishlistContext } from "../../Contexts/WishlistContextProvider";

export default function CartItems() {
  const {
    cart,
    handleRemoveCartItem,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useContext(CartContext);
  const { handleWishlistItems } = useContext(WishlistContext);

  const totalActualPrice = cart.reduce(
    (sumOfActualPrice, product) =>
      sumOfActualPrice + product.quantity * product.actualPrice,
    0
  );
  const totalDiscountedPrice = cart.reduce(
    (sumOfDiscountPrice, product) =>
      sumOfDiscountPrice + product.quantity * product.discountPrice,
    0
  );
  const discount = totalActualPrice - totalDiscountedPrice;

  return (
    <div className="page">
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="cartItems">
          <div>
            {cart.map((product) => (
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
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        +
                      </button>
                    </span>
                    <span>
                      <button className="quantityBtn">
                        {product.quantity}
                      </button>
                    </span>
                    <span>
                      <button
                        className="btn"
                        onClick={() => handleDecreaseQuantity(product)}
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
                    <SecondaryButton
                      onClick={handleRemoveCartItem}
                      name="Remove"
                    />
                  </span>
                  <span>
                    <SecondaryButton
                      onclick={() => handleWishlistItems(product)}
                      name="Move to Wishlist"
                    />
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
          <div className="displayPrice">
            <p>Price({cart.length} items)</p>
            <span>₹{totalActualPrice}</span>
          </div>
          <div className="displayPrice">
            <p>Discount</p>
            <span>- ₹{discount}</span>
          </div>
          <div className="displayPrice">
            <p>Delivery Charges</p>
            <span style={{ color: "green" }}>Free</span>
          </div>

          <hr className="hr2" />
          <p className="totalAmount">Total Amount </p>
          <span>₹{totalDiscountedPrice}</span>
          <hr className="hr2" />
          <div className="savingAmount">
            <span className="circleIcon">
              <BsFillCheckCircleFill />
            </span>
            Yay! You are saving ₹{discount}
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
