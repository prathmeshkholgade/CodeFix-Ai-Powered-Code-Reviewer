import React from "react";
import "./app.css";
import Left from "./page/Left";
import Right from "./page/Right";

export default function App() {
  return (
    <div className="main">
      <Left />
      <Right />
    </div>
  );
}
