import React from "react";
import { render } from "@testing-library/react";
import { waitForElementToBeRemoved } from "@testing-library/dom";
import { renderHook } from "@testing-library/react-hooks";
import { Feed, useApi } from "../../components/Feed";

const mockData = [
  {
    id_str: "1",
    created_at: new Date().toISOString(),
    text: "Some text",
    retweet_count: 10,
    retweeted: false,
    favorite_count: 15,
    favorited: false,
    user: {
      id_str: "u1",
      name: "Some User",
      screen_name: "someUser",
      profile_image_url_https: ""
    }
  }
];

jest.mock("../../services/api.js", () => jest.fn(async () => mockData));

// UI

describe("Feed", () => {
  // generated useEffect async warnings
  test("should initially display loading", () => {
    const utils = render(<Feed />);
    const loading = utils.getByTitle("loading");
    expect(loading).toBeDefined();
    const feed = utils.queryByTitle("feed"); // query doesn't throw
    expect(feed).toBe(null);
  });

  test("should display feed when loaded", async () => {
    const utils = render(<Feed />);

    await waitForElementToBeRemoved(() => {
      return utils.getByTestId("loading");
    });
    const feed = utils.getByTitle("feed");
    expect(feed).toBeDefined();
  });
});

// Hook

describe("useApi", () => {
  test("should initialize with an error null", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useApi());
    await waitForNextUpdate();
    expect(result.current.error).toBe(null);
  });

  // generated useEffect async warnings
  test("should initialize with loading true", async () => {
    const { result } = renderHook(() => useApi());
    expect(result.current.loading).toBe(true);
  });

  test("should change loading to true on update", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useApi());
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
  });

  test("should initialize with data null", () => {
    const { result } = renderHook(() => useApi());
    expect(result.current.data).toBe(null);
  });

  test("should return data once api completes", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useApi());
    await waitForNextUpdate();
    expect(result.current.data.length).toBe(1);
  });
});
