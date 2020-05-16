import mongoose from "mongoose";

const user = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  countryName: { type: String },
  countryCode: { type: String },
  phone: { type: String },
  email: { type: String, unique: true },
  createdBy: { type: String, default: "self" },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: String, default: "self" },
  updatedAt: { type: Date, default: Date.now },
  misc: { type: String },
});

export default mongoose.model("User", user);
