import { configure } from "@storybook/react";

// import default styles
import "../src/styles";

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
