import React from "react";
import Localstorage from "../../utils/storage/Localstorage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = Localstorage.USERData.get();

  const navigate = useNavigate();

  const handleLogout = () => {
    // Localstorage.USERData.remove();
    // window.location.reload();
    navigate("/auth/login");
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome to the Home Page</h1>
      {user && (
        <div>
          <h2>User Information</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Mobile Number: {user.moNumber}</p>
        </div>
      )}

      {/* //logout btn */}

      <button
        // onClick={() => {
        //   Localstorage.USERData.remove();
        //   window.location.reload();
        // }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
