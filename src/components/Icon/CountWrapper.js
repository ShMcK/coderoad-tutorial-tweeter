import React from "react";

export const IconCountWrapper = ({ children, count, ...rest }) => (
  <div className="Icon_Countable" {...rest}>
    {children}
    {count > 0 && <span className="Icon_Count">{count}</span>}
  </div>
);
