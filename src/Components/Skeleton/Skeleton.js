import React from "react";

import "./Skeleton.css";

const Skeleton = ({ variant, width, height }) => (
  <span className={`skeleton-box ${variant}`} style={{ width, height }} />
);

export default Skeleton;