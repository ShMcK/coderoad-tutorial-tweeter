import React from "react";
import { Message as UseStateMessage } from "../components/Message/useState";
import { Message as UseReducerMessage } from "../components/Message/useReducer";
import { USER } from "../config";

export default {
  title: "Message"
};

const now = new Date();

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

export const useStateMessage = () => {
  return <UseStateMessage {...post} />;
};

useStateMessage.story = {
  name: "useState example"
};

export const useReducerMessage = () => {
  return <UseReducerMessage {...post} />;
};

useReducerMessage.story = {
  name: "useReducer example"
};
