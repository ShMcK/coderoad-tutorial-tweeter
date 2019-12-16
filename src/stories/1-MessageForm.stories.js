import React from "react";
import { MessageForm } from "../components/MessageForm";
import { USER } from "../config";

export default {
  title: "MessageForm"
};

export const messageForm = () => <MessageForm user={USER} />;
