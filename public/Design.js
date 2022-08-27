import React from "react";

const Design = ({ color }) => {
  return (
    <>
      <svg
        width="100%"
        height="50"
        viewBox="0 0 331 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.62146" width="305" height="50" fill={color} />
        <path d="M0.62146 24.5V0L25.1215 24.5L0.62146 49V24.5Z" fill="white" />
        <path d="M305.621 24.5V0L330.121 24.5L305.621 49V24.5Z" fill={color} />
      </svg>
    </>
  );
};

export default Design;
