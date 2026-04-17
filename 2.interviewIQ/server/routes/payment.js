import express from  "express";
import dotenv from "dotenv";
dotenv.config()
import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const router = express.Router();


router.post("/create-checkout-session", async (req, res) => {
  try {
    const { product } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price * 100, // ₹ to paise
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;