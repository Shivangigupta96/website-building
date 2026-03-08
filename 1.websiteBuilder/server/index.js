






import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import websiteRouter from "./routes/website.routes.js"
import billingRouter from "./routes/billing.routes.js"
import { stripeWebhook } from "./controllers/stripeWebhook.controller.js"

const app = express()

// Stripe webhook must come before express.json()
app.post("/api/stripe/webhook", express.raw({ type: "application/json" }), stripeWebhook)

const port = process.env.PORT || 5000

// ✅ Put CORS before other middleware
app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "https://twowebsite-building-1.onrender.com"
//   ],
   origin: process.env.FRONTEND_URL,
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/website", websiteRouter)
app.use("/api/billing", billingRouter)

app.listen(port, () => {
  console.log("server started")
  connectDb()
})
