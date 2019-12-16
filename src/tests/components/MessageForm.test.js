import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MessageForm } from "../../components/MessageForm";
import { USER } from "../../config";

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
});
