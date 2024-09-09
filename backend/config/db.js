import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ganeshkumili7:AZI21PqEniLq8FSJ@cluster0.rh7rqxb.mongodb.net/food-del').then(()=>console.log('DB connected'));
}