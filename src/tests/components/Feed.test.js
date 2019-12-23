import React from "react";
import { render } from "@testing-library/react";
import { waitForElementToBeRemoved } from "@testing-library/dom";
import { Feed } from "../../components/Feed";

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
