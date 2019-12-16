import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MessageForm } from "../../components/MessageForm";
import { USER, MAX_MESSAGE_TEXT_LENGTH } from "../../config";

describe("MessageForm", () => {
  test("initiates text as empty", () => {
    const utils = render(<MessageForm user={USER} />);
    const input = utils.getByLabelText("message-form");
    expect(input.value).toBe("");
  });

  test("updates with user typing", () => {
    const text = "55555";
    const utils = render(<MessageForm user={USER} />);
    const input = utils.getByLabelText("message-form");
    fireEvent.change(input, { target: { value: text } });
    expect(input.value).toBe(text);
  });

  test("initiates text count as 0", () => {
    const utils = render(<MessageForm user={USER} />);
    const textCount = utils.getByTitle("text-count");
    expect(textCount.textContent.trim()).toBe(`0 / ${MAX_MESSAGE_TEXT_LENGTH}`);
  });

  test("updates text count with user typing", () => {
    const text = "55555";
    const utils = render(<MessageForm user={USER} />);
    const input = utils.getByLabelText("message-form");
    fireEvent.change(input, { target: { value: text } });
    const textCount = utils.getByTitle("text-count");
    expect(textCount.textContent.trim()).toBe(
      `${text.length} / ${MAX_MESSAGE_TEXT_LENGTH}`
    );
  });
});
