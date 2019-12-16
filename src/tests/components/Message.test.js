import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Message } from "../../components/Message/useState";
import { USER } from "../../config";

const mockProps = {
  user: USER,
  text: "Some text",
  created_at: new Date().toISOString(),
  retweeted: false,
  retweet_count: 12,
  favorited: false,
  favorite_count: 22
};

describe("Message", () => {
  test("should display the initial favorite count", () => {
    const utils = render(<Message {...mockProps} />);
    const count = utils.getByTitle("favorite_count");
    expect(count.textContent).toBe("22");
  });

  test("should increment the favorite count on click", () => {
    const utils = render(<Message {...mockProps} />);
    const button = utils.getByRole("favorite");
    fireEvent.click(button);
    const count = utils.getByTitle("favorite_count");
    expect(count.textContent).toBe("23");
  });

  test("favoriting should return to initial count on second click", () => {
    const utils = render(<Message {...mockProps} />);
    const button = utils.getByRole("favorite");
    fireEvent.click(button);
    fireEvent.click(button);
    const count = utils.getByTitle("favorite_count");
    expect(count.textContent).toBe("22");
  });

  test("should display the initial retweet count", () => {
    const utils = render(<Message {...mockProps} />);
    const count = utils.getByTitle("retweet_count");
    expect(count.textContent).toBe("12");
  });

  test("should increment the retweet count on click", () => {
    const utils = render(<Message {...mockProps} />);
    const button = utils.getByRole("retweet");
    fireEvent.click(button);
    const count = utils.getByTitle("retweet_count");
    expect(count.textContent).toBe("13");
  });

  test("retweeting should return to initial count on second click", () => {
    const utils = render(<Message {...mockProps} />);
    const button = utils.getByRole("retweet");
    fireEvent.click(button);
    fireEvent.click(button);
    const count = utils.getByTitle("retweet_count");
    expect(count.textContent).toBe("12");
  });
});
