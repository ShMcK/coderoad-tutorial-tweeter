import React from "react";

import BootstrapCard from "react-bootstrap/Card";
import { Avatar } from "../Avatar";
import "./styles.css";

export const Card = ({ children, profile_image, className, ...rest }) => {
  return (
    <BootstrapCard className={`Card ${className || ""}`} {...rest}>
      <div className="Card_LeftColumn">
        <Avatar image={profile_image} />
      </div>
      <div className="Card_RightColumn">{children}</div>
    </BootstrapCard>
  );
};
