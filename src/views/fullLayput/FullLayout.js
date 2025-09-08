import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const FullLayout = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div
        style={{
          marginTop: "60px",
          padding: "2rem",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default FullLayout;
