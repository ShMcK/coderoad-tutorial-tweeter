import React from "react";
import BootstrapImage from "react-bootstrap/Image";

export const Avatar = ({ image }) => (
  <BootstrapImage src={image} roundedCircle style={{ height: 49, width: 49 }} />
);
