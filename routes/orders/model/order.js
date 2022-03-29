const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderName: { type: String },
    orderAge: { type: String },
    orderFavoriteMovie: { type: String },
     
  },
  {
    timestamps: true,
  }
);
// const orderSchema = new mongoose.Schema(
//     {
//       orderName: String,
//       orderAmount: Number,
//       orderItems: Array,
//       orderOwner: { type: mongoose.Schema.ObjectId, ref: "user" },
//     },
//     {
//       timestamps: true,
//     }
//   );

module.exports = mongoose.model("order", orderSchema);