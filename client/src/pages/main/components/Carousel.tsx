import React from "react";
import { Carousel } from "antd";
interface Props {}

export const Slider: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "260px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel arrows autoplay infinite waitForAnimate dots>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
