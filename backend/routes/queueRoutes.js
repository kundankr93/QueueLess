import express from "express";

import {
  joinQueue,
  myQueue,
  leaveQueue,
  queueHistory,
} from "../controllers/queueController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/join/:organizationId", protect, joinQueue);

router.get("/myqueue", protect, myQueue);

router.delete("/leave/:queueId", protect, leaveQueue);

router.get("/history", protect, queueHistory);

export default router;