import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    sold: { type: Number, required: true },
    review: { type: Number, required: true },
    like: { type: Number, required: true },
    love: { type: Number, required: true },
    yelp: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
