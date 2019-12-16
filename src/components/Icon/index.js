import React from "react";

import * as SvgIcon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

const icons = {
  comment: SvgIcon.faComment,
  retweet: SvgIcon.faRetweet,
  favorite: SvgIcon.faHeart,
  share: SvgIcon.faShare,
  loading: SvgIcon.faSpinner
};

export const Icon = ({ icon, active, highlight, ...rest }) => (
  <FontAwesomeIcon
    icon={icons[icon]}
    color={active ? highlight : "lightgrey"}
    {...rest}
  />
);

export { IconButton } from "./Button";
export { IconCountWrapper } from "./CountWrapper";
