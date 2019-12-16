import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { MessageForm, useText } from "../../components/MessageForm";
import { USER, MAX_MESSAGE_TEXT_LENGTH } from "../../config";

describe.skip("MessageForm", () => {
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

  test("disables tweet button when text is empty", () => {
    const utils = render(<MessageForm user={USER} />);
    const button = utils.getByRole("tweet");
    expect(button.disabled).toBe(true);
  });

  test("updates with user typing", () => {
    const text = "A";
    const utils = render(<MessageForm user={USER} />);
    const input = utils.getByLabelText("message-form");
    fireEvent.change(input, { target: { value: text } });
    const button = utils.getByRole("tweet");
    expect(button.disabled).toBe(false);
  });
});

describe.skip("useText", () => {
  test("useText hook should initiate text to empty string", () => {
    const { result } = renderHook(useText);
    expect(result.current.text).toBe("");
  });

  test("useText hook should return a handleChange function", () => {
    const { result } = renderHook(useText);
    expect(result.current.handleChange).toBeDefined();
  });

  test("useText hook allow updates of text", () => {
    const { result } = renderHook(useText);

    act(() => {
      const event = {
        preventDefault() {},
        target: {
          value: "10 letters"
        }
      };
      result.current.handleChange(event);
    });
    expect(result.current.text).toBe("10 letters");
  });
});
