import "./Profile.css";
import { useEffect, useState } from "react";

import {
  getProfile,
  updateProfile,
  changePassword,
} from "../../services/authService";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loadingPassword, setLoadingPassword] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();

      setUser(data.user);

      setFormData({
        name: data.user.name,
        phone: data.user.phone || "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const data = await updateProfile(formData);

      alert(data.message);

      setUser(data.user);

      setShowEditModal(false);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to update profile"
      );
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoadingPassword(true);

      const data = await changePassword({
        currentPassword,
        newPassword,
      });

      alert(data.message);

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      setShowPasswordModal(false);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to change password"
      );
    } finally {
      setLoadingPassword(false);
    }
  };

  if (loading) {
    return (
      <div className="profile-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h1>{user.name}</h1>

        <p className="role">
          {user.role.toUpperCase()}
        </p>

        <div className="profile-info">

          <div className="info-box">
            <label>Email</label>
            <span>{user.email}</span>
          </div>

          <div className="info-box">
            <label>Phone</label>
            <span>{user.phone || "Not Added"}</span>
          </div>

          <div className="info-box">
            <label>Joined</label>
            <span>
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>

        </div>

        <div className="action-buttons">

          <button
            className="edit-btn"
            onClick={() => setShowEditModal(true)}
          >
            ✏ Edit Profile
          </button>

          <button
            className="password-btn"
            onClick={() => setShowPasswordModal(true)}
          >
            🔒 Change Password
          </button>

        </div>

      </div>

      {/* ================= Edit Profile Modal ================= */}

      {showEditModal && (
        <div className="modal-overlay">

          <div className="modal">

            <h2>Edit Profile</h2>

            <input
              className="profile-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />

            <input
              className="profile-input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />

            <div className="modal-buttons">

              <button
                className="save-btn"
                onClick={handleUpdate}
              >
                Save Changes
              </button>

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowEditModal(false)
                }
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

      {/* ================= Change Password Modal ================= */}

      {showPasswordModal && (
        <div className="modal-overlay">

          <div className="modal">

            <h2>Change Password</h2>

            <form
              onSubmit={handlePasswordChange}
            >

              <input
                type="password"
                className="profile-input"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) =>
                  setCurrentPassword(
                    e.target.value
                  )
                }
                required
              />

              <input
                type="password"
                className="profile-input"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
                required
              />

              <input
                type="password"
                className="profile-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                required
              />

              <div className="modal-buttons">

                <button
                  className="save-btn"
                  type="submit"
                  disabled={loadingPassword}
                >
                  {loadingPassword
                    ? "Updating..."
                    : "Change Password"}
                </button>

                <button
                  className="cancel-btn"
                  type="button"
                  onClick={() =>
                    setShowPasswordModal(false)
                  }
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>
      )}
    </div>
  );
}

export default Profile;