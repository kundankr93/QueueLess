import API from "../api/api";

// Register User
export const registerUser = async (userData) => {
  const response = await API.post("/auth/register", userData);
  return response.data;
};

// Login User
export const loginUser = async (userData) => {
  const response = await API.post("/auth/login", userData);
  return response.data;
};

// Get Logged In User
export const getProfile = async () => {
  const response = await API.get("/auth/profile");
  return response.data;
};

// Update Profile
export const updateProfile = async (userData) => {
  const { data } = await API.put(
    "/auth/profile",
    userData
  );

  return data;
};

// Change Password
export const changePassword = async (passwordData) => {
  const { data } = await API.put(
    "/auth/change-password",
    passwordData
  );

  return data;
};