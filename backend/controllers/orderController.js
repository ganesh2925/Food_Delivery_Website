import orderModel from "../models/orderModel.js";
import userModel from "../models/useModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//  placing user order from frontend
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:3000";
  try {
    if (!req.body.payment) {
      return res.status(400).send({ message: "Payment is required" });
    }
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: JSON.stringify(req.body.address),
      payment: req.body.payment,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Shipping Charge",
        },
        unit_amount: 40 * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({
      success: true,
      message: "Order placed successfully",
      session_url: session.url,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder };
