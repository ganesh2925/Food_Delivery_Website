import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems =[];
    food_list.map((item)=>{
      if(cartItems[item._id] > 0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount() + 40
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error")
    }
  }

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fileds">
          <input name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" required placeholder="Frint Name" />
          <input name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" required placeholder="Last Name" />
        </div>
        <input name="email" onChange={onChangeHandler} value={data.email} type="email" required placeholder="Email" />
        <input name="street" onChange={onChangeHandler} value={data.street} type="text" required placeholder="Street" />
        <div className="multi-fileds">
          <input name="city" onChange={onChangeHandler} value={data.city} type="text" required placeholder="City" />
          <input type="text" required placeholder="State" />
        </div>
        <div className="multi-fileds">
          <input name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" required placeholder="Postal Code" />
          <input name="country" onChange={onChangeHandler} value={data.country} type="text" required placeholder="Country" />
        </div>
        <input name="phone" onChange={onChangeHandler} value={data.phone} type="text" required placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} ₹</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:40} ₹</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount() + 40} ₹</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
