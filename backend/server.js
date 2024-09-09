import express from "express";
import cors from "cors";
import foodRounter from "./routes/foodRoute.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import { placeOrder } from "./controllers/orderController.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("API Working");
})

// db connection
connectDB();

// API endpoints
app.use('/api/food', foodRounter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart', cartRouter)
app.use("/api/order", orderRouter)

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})