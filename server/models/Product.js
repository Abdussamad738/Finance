import mongoose from "mongoose";
import money from "money";
// import { loadType } from "mongoose-currency";
;
const Schema = mongoose.Schema;
// loadType(mongoose);
console.log("his is from Product.js");
const ProductSchema = new Schema(
  {
    price: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
    expense: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);


const Product = mongoose.model("Product", ProductSchema);

export default Product;