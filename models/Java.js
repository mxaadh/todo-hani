import mongoose from "mongoose";

const javaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Java = mongoose.model("java", javaSchema);
export default Java;
