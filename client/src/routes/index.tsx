import React from "react";
import { Routes, Route } from "react-router-dom";
import { Economy } from "../pages/economy";
import { InterestingFacts } from "../pages/interesting facts";
import { Main } from "../pages/main";
import { Health } from "../pages/health";
import { Sports } from "../pages/sports";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Routing = () => {
  return (
    <div className="container">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/health" element={<Health />} />
          <Route path="/interesting-facts" element={<InterestingFacts />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
