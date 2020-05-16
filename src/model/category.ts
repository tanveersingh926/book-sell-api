import mongoose from "mongoose";

const category = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  categoryId: { type: String },
  categoryName: { type: String },
});

export default mongoose.model("Category", category);
