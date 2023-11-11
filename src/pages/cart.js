import React, { useContext, useState, useEffect } from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import CartContext from "./cartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export default function Cart() {
  const { cartData, dispatch } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [grandTotal, setGrandTotal] = useState(0);
  const { i18n } = useTranslation();

  const handleDeleteReservedList = (index, dispatch) => {
    dispatch({ type: "REMOVE_CART_DATA", index });
  };

  useEffect(() => {
    let sum = 0;
    for (const cart of cartData) {
      sum += parseFloat(cart.priceEvent);
    }
    setTotalPrice(sum);

    let couponDiscount = 0;
    if (coupon === "SHECODES10") {
      couponDiscount = sum * 0.1;
    }
    const totalWithDiscount = sum - couponDiscount;
    setGrandTotal(totalWithDiscount);
  }, [cartData, coupon]);

  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
  };

  const handleCheckout = () => {
    const userEmail = "ali43@gmail.com";
    const data = {
      email: userEmail,
      price_id: undefined,
    };

    let id;
    console.log(cartData);
    for (const cart of cartData) {
      id = cart.id;
      console.log(id);
      data.price_id = id;
    }

    console.log(data);

    if (i18n.language === "en") {
      fetch(
        `https://portals.mentalland.com/api/V1/payment/english_gateway/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not OK");
          }
          return response.json();
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      fetch(
        `https://portals.mentalland.com/api/V1/payment/iranian_gateway/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((result) => {
          "good job";
        })
        .catch((error) => {
          "ایمیل مورد نظر یافت نشد";
        });
    }
  };
  return (
    <div>
      <Header className="twitter" />
      <Navbar />

      <div className="cart">
        <div className="cartH">Cart({cartData.length})</div>
        <div className="cartlist">
          <div className="cartlisttitle">
            <div>Date</div>
            <div>Item</div>
            <div>Description</div>
            <div>Price</div>
            <div>Delete</div>
          </div>
          <div>
            {cartData.map((cart, index) => (
              <>
                <div className="reservedlist" key={index}>
                  <div>{cart.dateEvent}</div>
                  <div>{cart.item}</div>
                  <div>
                    {cart.titleEvent}
                    <span>{cart.id}</span>
                  </div>
                  <div>{cart.priceEvent}</div>
                  <div>
                    <RiDeleteBin6Line
                      className="svg deleteItem"
                      onClick={() => handleDeleteReservedList(index, dispatch)}
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="makefinal text-center">
        <label>
          Sub Total <br />
          <input
            type="text"
            inputmode="numeric"
            className="totalprice"
            value={totalPrice}
            readOnly
          />
        </label>
        <div class="coupon-wrapper">
          <div class="input-container">
            <input
              type="text"
              className="coupon"
              value={coupon}
              onChange={handleCouponChange}
            />
            <button className="addcoupon">Add Coupon</button>
          </div>
        </div>
        <label>
          Grand Total <br />
          <input
            type="text"
            inputmode="numeric"
            className="grandtotal"
            value={grandTotal}
            readOnly
          />
        </label>
        <div>
          <button className="checkout" onClick={() => handleCheckout()}>
            Check out
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
