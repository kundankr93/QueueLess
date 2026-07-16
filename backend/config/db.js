import mongoose from "mongoose";
import dns from "dns";

// Fix for systems where Node uses localhost DNS
if (dns.getServers().includes("127.0.0.1")) {
  console.log("⚠️ Localhost DNS detected. Switching to Google DNS...");
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;