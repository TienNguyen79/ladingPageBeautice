import React from "react";

const TextHighlight = ({ title = "TextHighlight", className = "" }) => {
  return (
    <h2 className={`text-secondary font-semibold ${className}`}>{title}</h2>
  );
};

export default TextHighlight;
