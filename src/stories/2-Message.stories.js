import React from "react";
import { Message } from "../components/Message";
import { USER } from "../config";

export default {
  title: "Message"
};

const now = new Date();

export const message = () => {
  const post = {
    id: "1",
    created_at: now.setMinutes(now.getMinutes() - 20),
    text:
      "A bunch of text here filling out the body of the tweet, might be really really long. Maybe even spans a few lines because its so long.",
    user: USER,
    retweeted: false,
    retweet_count: 52,
    favorited: false,
    favorite_count: 101
  };
  return <Message {...post} />;
};
