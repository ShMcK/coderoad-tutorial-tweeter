import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Card } from "../Card";
import { MAX_MESSAGE_TEXT_LENGTH } from "../../config";
import "./styles.css";

export const useText = initialText => {
  const [text, setText] = React.useState("");

  const handleChange = event => {
    event.preventDefault();
    const updatedText = event.target.value;
    setText(updatedText);
  };

  return {
    text,
    handleChange
  };
};

export const MessageForm = ({ user }) => {
  const { text, handleChange } = useText("");
  return (
    <Card className="MessageForm" profile_image={user.profile_image}>
      <Form>
        <Form.Group
          className="MessageForm_TextArea"
          aria-label="message-form"
          as="textarea"
          rows="3"
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
        ></Form.Group>
        <div className="MessageForm_Options">
          <span className="MessageForm_TextCount" title="text-count">
            {text.length} / {MAX_MESSAGE_TEXT_LENGTH}
          </span>
          <Button
            className="MessageForm_TweetButton"
            variant="primary"
            type="submit"
            role="tweet"
            disabled={text.length < 1}
          >
            Tweet
          </Button>
        </div>
      </Form>
    </Card>
  );
};
