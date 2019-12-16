import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Message, messageReducer } from "../../components/Message/useReducer";
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

const initialState = {
  retweeted: false,
  retweet_count: 12,
  favorited: false,
  favorite_count: 22
};

describe("messageReducer", () => {
  test("should display the initial values", () => {
    const returnsState = messageReducer(initialState, { type: "UNKNOWN" });
    expect(returnsState).toEqual(initialState);
  });

  test('should increment on "FAVORITE"', () => {
    const nextState = messageReducer(initialState, { type: "FAVORITE" });
    expect(nextState).toEqual({
      ...initialState,
      favorited: true,
      favorite_count: 23
    });
  });

  test('should return to default on second "FAVORITE"', () => {
    const first = messageReducer(initialState, { type: "FAVORITE" });
    const second = messageReducer(first, { type: "FAVORITE" });
    expect(second).toEqual({
      ...initialState,
      favorited: false,
      favorite_count: 22
    });
  });

  test('should increment on "RETWEET"', () => {
    const nextState = messageReducer(initialState, { type: "RETWEET" });
    expect(nextState).toEqual({
      ...initialState,
      retweeted: true,
      retweet_count: 13
    });
  });

  test('should return to default on second "RETWEET"', () => {
    const first = messageReducer(initialState, { type: "RETWEET" });
    const second = messageReducer(first, { type: "RETWEET" });
    expect(second).toEqual({
      ...initialState,
      retweeted: false,
      retweet_count: 12
    });
  });
});
