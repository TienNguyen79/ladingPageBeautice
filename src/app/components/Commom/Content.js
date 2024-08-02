import React from "react";

const Content = ({ children, className = "" }) => {
  return <p className={`text-textGrey font-normal ${className}`}>{children}</p>;
};

export default Content;
