import mongoose from "mongoose";

const book = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String },
  image: { type: String },
  author: { type: String },
  description: { type: String },
  condition: { type: String },
  price: { type: Number },
  isbn: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: { type: String },
  enquiries: [
    {
      name: String,
      email: String,
      phone: String,
      message: String,
    },
  ],
  subject: { type: String },
  soldAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Book", book);
