import React from "react";

const Title = ({ title = "Đây là title nhé", className = "" }) => {
  return <h1 className={`text-primary font-semibold ${className}`}>{title}</h1>;
};

export default Title;
