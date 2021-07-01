import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  return (
    <div className="mw-100 card center">
      <div className="mb-0">{children}</div>
    </div>
  );
};

export default Card;
