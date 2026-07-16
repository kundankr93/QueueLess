import Organization from "../models/Organization.js";

// ==============================
// Get All Organizations
// ==============================

export const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: organizations.length,
      organizations,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Create Organization
// ==============================

export const createOrganization = async (req, res) => {
  try {
    const organization = await Organization.create(req.body);

    res.status(201).json({
      success: true,
      organization,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};