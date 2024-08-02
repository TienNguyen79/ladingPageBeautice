import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <img
      src="/Spin-1s-200px.svg"
      className="loadingsvg h-[30px]"
      alt="loading"
    />
  ) : (
    children
  );

  let defaultClassName =
    "flex justify-center items-center  py-[14px] px-[41px] font-semibold  "; //nhớ có dấu cách ở cuối

  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + "bg-secondary text-[#FFF] ";
      break;

    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultClassName} ${className}`}>
        {child}
      </Link>
    );
  return (
    <button
      type={type}
      {...rest}
      className={`${defaultClassName} ${
        !!isLoading
          ? "opacity-50 pointer-events-none select-none !py-[10px]"
          : ""
      } ${className}`}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary"]),
};

export default Button;
