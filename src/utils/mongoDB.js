import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log(" I am ready");
    return;
  }
  await mongoose.connect(`mongodb://localhost:27017/e-commerce-api`);
};
export default connectDB;
