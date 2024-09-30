import React from "react";
import "./App.scss";
import { useQuery } from "react-query";
import axios from "axios";
import { Routing } from "./routes";

export function App() {
  return <Routing />;
}
