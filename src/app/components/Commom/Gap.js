import React, { Children } from "react";

const Gap = ({ children, className = "" }) => {
  return <div className={`px-[150px] ${className}`}>{children}</div>;
};

export default Gap;
