/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = { name: "ANSMAS" };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="container mx-auto mt-8">
      {user ? (
        <>
          <h2 className="text-3xl font-semibold mb-4">Welcome, {user.name}!</h2>
          {/* Profile Information */}
          <div className="bg-white p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Profile Information</h3>
            <p>Email: {user.email || "N/A"}</p>
            <p>Phone: {user.phone || "N/A"}</p>
            {/* Add more profile information fields as needed */}
            <Link
              to="/dashboard/edit-profile"
              className="text-blue-500 hover:underline"
            >
              Edit Profile
            </Link>
          </div>

          {/* Account Settings */}
          <div className="bg-white p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
            <p>Password: *********</p>
            {/* Add more account settings options */}
            <Link
              to="/dashboard/change-password"
              className="text-blue-500 hover:underline"
            >
              Change Password
            </Link>
          </div>

          {/* Activity Overview */}
          <div className="bg-white p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Activity Overview</h3>
            {/* Display recent activity, transactions, etc. */}
          </div>

          {/* Order History */}
          <div className="bg-white p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Order History</h3>
            {/* Display order history, transaction details, etc. */}
          </div>

          {/* Saved Items or Favorites */}
          <div className="bg-white p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Saved Items</h3>
            {/* Display a list of saved items, favorites, or bookmarks */}
          </div>

          {/* Communication and Messages */}
          <div className="bg-white p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Messages</h3>
            {/* Display communication and messages */}
          </div>

          {/* Billing and Subscription Information */}
          <div className="bg-white p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Billing Information</h3>
            {/* Display billing information, subscription details, etc. */}
          </div>

          {/* Support and Help */}
          <div className="bg-white p-4 rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Support and Help</h3>
            {/* Display help documentation, FAQs, and customer support options */}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </>
      ) : (
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to the Dashboard!
        </h2>
      )}
    </div>
  );
};

export default Dashboard;
