import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Mongo URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
});
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log("❌ MongoDB Connection Failed");
    console.log(err); // Print the full error object
    process.exit(1);
  }
};

export default connectDB;