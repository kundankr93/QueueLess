import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["Hospital", "Bank", "College", "Government"],
      required: true,
    },

    address: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    waiting: {
      type: Number,
      default: 0,
    },

    avgTime: {
      type: Number,
      default: 5,
    },

    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Organization", organizationSchema);