import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import Organization from "../models/Organization.js";

dotenv.config();

await connectDB();

await Organization.deleteMany();

const organizations = [
  {
    name: "Apollo Hospital",
    type: "Hospital",
    address: "Raipur",
    description: "24x7 Multi Speciality Hospital",
    waiting: 12,
    avgTime: 5,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    name: "AIIMS Raipur",
    type: "Hospital",
    address: "Raipur",
    description: "Government Medical Institute",
    waiting: 20,
    avgTime: 8,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
  },
  {
    name: "State Bank of India",
    type: "Bank",
    address: "Raipur",
    description: "Main Branch",
    waiting: 10,
    avgTime: 6,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    name: "Punjab National Bank",
    type: "Bank",
    address: "Raipur",
    description: "Customer Service",
    waiting: 8,
    avgTime: 4,
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    name: "NIT Raipur",
    type: "College",
    address: "Raipur",
    description: "Academic Office",
    waiting: 18,
    avgTime: 7,
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
  },
  {
    name: "Municipal Corporation",
    type: "Government",
    address: "Raipur",
    description: "Citizen Services",
    waiting: 15,
    avgTime: 10,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  }
];

await Organization.insertMany(organizations);

console.log("✅ Organizations Seeded Successfully");

mongoose.connection.close();