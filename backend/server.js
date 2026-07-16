import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dns from "dns";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import organizationRoutes from "./routes/organizationRoutes.js";
import queueRoutes from "./routes/queueRoutes.js";

dotenv.config();

// Fix MongoDB DNS issue
if (dns.getServers().includes("127.0.0.1")) {
  console.log("⚠️ Localhost DNS detected. Switching to Google DNS...");
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
}

// Connect Database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/queue", queueRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 QueueLess Backend Running",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/organizations", organizationRoutes);

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});