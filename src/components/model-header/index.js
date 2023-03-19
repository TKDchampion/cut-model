import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ModelHeader = () => {
  return (
    <div>
      <h1>Select functions</h1>
      <h2 className="model-box">
        <Link to="/shape">1. Shape</Link>
        <Link to="/square">2. Square</Link>
      </h2>
    </div>
  );
};

export default ModelHeader;
