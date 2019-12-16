import React from "react";

export const IconButton = ({ children, className, ...rest }) => (
  <button className={`Icon_Button ${className}`} {...rest}>
    {children}
  </button>
);
