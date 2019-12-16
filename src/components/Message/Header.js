import React from "react";
import { dateFormat } from "../../services/dateFormat";

export const MessageHeader = ({ name, screen_name, created_at }) => (
  <>
    <span className="Message_Header_User">{name}</span>
    <span className="Message_Header_Username">{screen_name}</span>
    <span className="Message_Header_PostTime">· {dateFormat(created_at)}</span>
  </>
);
