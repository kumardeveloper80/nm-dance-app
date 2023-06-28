import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/nm-dance-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("DB connected successfully");
  })
}