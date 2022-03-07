import React from "react";

import "./Skeleton.css";

const Skeleton = ({ variant, width, height, className }) => (
  <span className={`skeleton-box ${variant} ${className}`} style={{ width, height }} />
);

export default Skeleton;