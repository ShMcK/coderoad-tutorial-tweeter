# CodeRoad Tutorial React Starter

This project is a working starter boilerplate for a React based CodeRoad tutorial.

See [instructions for reverting back](#Revert-to-Create-React-App) to its original [Create React App](https://github.com/facebook/create-react-app) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Revert to Create-React-App

This project is slightly modified from the original create-react-app config in order to integrate with CodeRoad's testing tools. See react-app-rewired for details on how these modifications are implemented: https://github.com/timarney/react-app-rewired.

If you're done with your CodeRoad course, feel free to revert back. Just follow the instructions below:

1. delete the following file: `config.overrides.js`
2. Remove unused packages by running the following:

```shell
npm uninstall react-app-rewired jest-tap-reporter
```

3. Revert the scripts in package.json back to their original formats:

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
		"test": "react-scripts test"
	},
```

4. Remove the following lines from your `.gitignore` file. These should be enabled when publishing or sharing your application.

```ms
package-lock.json
yarn.lock
```

Happy hacking!
