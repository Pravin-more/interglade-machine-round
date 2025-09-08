import React from "react";
import { Layout, Menu, Dropdown, Avatar, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  UserOutlined,
  LogoutOutlined,
  BookOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import Localstorage from "../../utils/storage/Localstorage";

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userReducer);

  const handleLogout = () => {
    Localstorage.clear();
    navigate("/auth/login");
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="my-bookings" icon={<BookOutlined />}>
        <Link to="/my-bookings">My Bookings</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="flex justify-between items-center bg-#fff shadow px-6">
      <div className="text-xl font-bold">
        <Link to="/home">Events</Link>
      </div>
      {userInfo.id ? (
        <Dropdown overlay={profileMenu} trigger={["click"]}>
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar icon={<UserOutlined />} />
            <span>{userInfo.name}</span>
          </div>
        </Dropdown>
      ) : (
        <Button
          type="primary"
          icon={<LoginOutlined />}
          onClick={() => navigate("/auth/login")}
        >
          Login
        </Button>
      )}
    </Header>
  );
};

export default Navbar;
