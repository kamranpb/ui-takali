import "./index.scss";

import React from "react";
import { Segmented, Select } from "antd";
import logo from "../assets/images/logo.png";
import {
  HomeOutlined,
  DollarOutlined,
  DribbbleOutlined,
  HeartOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (value: string) => {
    navigate(`/${value}`);
  };
  const currentPath = location.pathname.substring(1) || "";
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar__logo" />
      <Segmented
        style={{
          width: 922,
          padding: 5,
        }}
        size="large"
        options={[
          { label: "Main", value: "", icon: <HomeOutlined /> },
          { label: "Economy", value: "economy", icon: <DollarOutlined /> },
          { label: "Sports", value: "sports", icon: <DribbbleOutlined /> },
          { label: "Health", value: "health", icon: <HeartOutlined /> },
          {
            label: "Interesting facts",
            value: "interesting-facts",
            icon: <ScheduleOutlined />,
          },
        ]}
        block
        value={currentPath}
        onChange={handleChange}
      />

      <Select
        defaultValue="AZ"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "AZ", label: "AZ" },
          { value: "EN", label: "EN" },
          { value: "RU", label: "RU" },
        ]}
      />
    </nav>
  );
};
