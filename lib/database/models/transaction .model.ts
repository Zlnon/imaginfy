import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  stripedId: { Type: String, requied: true, unique: true },
  amount: { type: Number, reqired: true },
  plan: { type: String },
  credits: { type: Number },
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
});
const Transaction =
  models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
