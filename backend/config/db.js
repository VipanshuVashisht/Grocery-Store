import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vipanshuvashisht:vip5151@cluster0.ddmyesq.mongodb.net/food-delivery')
    .then(()=>console.log("DB connected"))
}