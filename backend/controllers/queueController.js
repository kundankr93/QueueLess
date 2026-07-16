import Queue from "../models/Queue.js";
import Organization from "../models/Organization.js";

// Join Queue
export const joinQueue = async (req, res) => {
  try {
    const { organizationId } = req.params;
    const userId = req.user._id;

    const organization = await Organization.findById(organizationId);

    if (!organization) {
      return res.status(404).json({
        success: false,
        message: "Organization not found",
      });
    }

    // Check if user is already waiting
    const alreadyJoined = await Queue.findOne({
      organization: organizationId,
      user: userId,
      status: "Waiting",
    });

    if (alreadyJoined) {
      return res.status(400).json({
        success: false,
        message: "You already joined this queue",
      });
    }

    const peopleWaiting = await Queue.countDocuments({
      organization: organizationId,
      status: "Waiting",
    });

    const queue = await Queue.create({
      organization: organizationId,
      user: userId,
      tokenNumber: peopleWaiting + 1,
      position: peopleWaiting + 1,
      estimatedTime: (peopleWaiting + 1) * organization.avgTime,
    });

    organization.waiting += 1;
    await organization.save();

    res.status(201).json({
      success: true,
      message: "Queue Joined Successfully",
      queue,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// My Queue
export const myQueue = async (req, res) => {
  try {
    const queues = await Queue.find({
  user: req.user._id,
  status: "Waiting",
})
.populate("organization")
.sort({ createdAt: -1 });

    res.json({
      success: true,
      queues,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Queue History
// ===============================
export const queueHistory = async (req, res) => {
  try {
    const history = await Queue.find({
      user: req.user._id,
      status: { $in: ["Completed", "Cancelled"] },
    })
      .populate("organization")
      .sort({ updatedAt: -1 });

    res.status(200).json({
      success: true,
      history,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Leave Queue
export const leaveQueue = async (req, res) => {
  try {
    const { queueId } = req.params;

    const queue = await Queue.findById(queueId);

    if (!queue) {
      return res.status(404).json({
        success: false,
        message: "Queue not found",
      });
    }

    if (queue.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (queue.status !== "Waiting") {
      return res.status(400).json({
        success: false,
        message: "Cannot leave this queue",
      });
    }

    // Reduce waiting count
    await Organization.findByIdAndUpdate(queue.organization, {
      $inc: { waiting: -1 },
    });

    queue.status = "Cancelled";
    await queue.save();

    res.json({
      success: true,
      message: "Queue Left Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

