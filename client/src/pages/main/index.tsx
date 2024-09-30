import { Divider, Flex, Space } from "antd";
import { Slider } from "./components/Carousel";
import React from "react";
import { UsefullInfo } from "./components/usefullInfo";

interface Props {}

export const Main: React.FC = () => {
  return (
    <div className="container-child">
      <Slider />
      <div className="container-child-titles">
        <div>
          <Divider orientation="left" style={{ borderColor: "#7cb305" }}>
            Usefull Informations
          </Divider>
          <Space size={24} wrap>
            <UsefullInfo />
            <UsefullInfo />
            <UsefullInfo />
            <UsefullInfo />
            <UsefullInfo />
            <UsefullInfo />
            <UsefullInfo />
          </Space>
        </div>
        {/* breaking news */}
        <div>
          <Divider orientation="left" style={{ borderColor: "#1605b3" }}>
            Breaking News
          </Divider>
          <Space size={24} wrap>
            <UsefullInfo />
            <UsefullInfo />
            <UsefullInfo />
            <UsefullInfo />
            <UsefullInfo />
            <UsefullInfo />
            <UsefullInfo />
          </Space>
        </div>
      </div>
    </div>
  );
};
