import { Schema, model } from "mongoose";

const shopSchema = Schema({
  productImage: {
    type: String,
  },
  title: {
    type: String,
  },
  isPurchase: {
    type: Boolean,
  },
  cardImage: {
    type: String,
  }
});

export default model("shop", shopSchema);