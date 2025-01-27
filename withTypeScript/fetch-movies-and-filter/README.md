# The task for live coding:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## To install TypeScript you have to:

1. Ensure your Node.js and npm are up to date
   bush `node -v npm -v `

In case need to update

#### `npm install -g npm@latest`

2. Clear NPM Cache

#### `npm cache verify`

#### `npm cache clean --force`

3. To install TypeScript project

### `npx create-react-app my-project-name --template typescriptc`

## (if it doesn't work, install TS with Parcel)

2. Uninstall and then reinstall Create-React-App

#### `npm uninstall -g create-react-app`

#### `npx create-react-app your-app-name --template typescript`

3. Install specific versions of React and ReactDOM like for 18th version

#### `npm install react@18 react-dom@18`

4. Install TypeScript and set TypeScript configuration

#### `npm install --save-dev`

#### `npx tsc --init`

You can manually set up TypeScript in file tsconfig.json of the project root, typically
{
"compilerOptions": {
"target": "es5",
"lib": ["dom", "dom.iterable", "esnext"],
"allowJs": true,
"skipLibCheck": true,
"esModuleInterop": true,
"allowSyntheticDefaultImports": true,
"strict": true,
"forceConsistentCasingInFileNames": true,
"module": "esnext",
"moduleResolution": "node",
"resolveJsonModule": true,
"isolatedModules": true,
"noEmit": true,
"jsx": "react-jsx"
},
"include": ["src"]
}

5. To install the latest version of React’s type definitions:

#### `npm install --save-dev @types/react @types/react-dom`

6. Install and configure a Parcel bundler/setup. It lets you write modular code and bundle it together into small packages to optimize load time.

#### `npm install --save-dev parcel@next @parcel/transformer-typescript-tsc`

7. Create a basic src/index.tsx React component file, typically
   import React from 'react';
   import ReactDOM from 'react-dom';
   const App = () => div> Hello, React! /div>;
   ReactDOM.render( App />, document.getElementById('app'));

8. Create index.html in your project root, typically
   !DOCTYPE html>
   html lang="en">
   head>
   meta charset="UTF-8">
   meta name="viewport" content="width=device-width, initial-scale=1.0">
   title>Using Props /title>
   /head>
   body>
   div id="app">/div>
   script src="./src/index.tsx"> /script>
   /body>
   /html>

9. Modify your package.json to add start and build scripts for Parcel
   "scripts": {
   "start": "parcel index.html",
   "build": "parcel build src/index.tsx"
   },

10. Run the project

#### npm start

## (if it doesn't work again, try to install TS with webpack)

remove the old project but move one directory up to ensure you're not in the directory to be deleted

#### cd ..

to remove the old project, enter:
bush ```
rm -rf old-project-name

````

powershell ```
Remove-Item old-project-name -Recurse -Force

````

1. create a project directory

#### `mkdir my-project-name`

2. Go to the directory (cd my-project-name) and

#### `npm init -y`

2. install React and TypeScript

#### `npm install react react-dom`

#### `npm install --save-dev typescript @types/react @types/react-dom`

(- if you need to install RTL separately, command for it
npm install --save-dev @testing-library/react @testing-library/dom

- if you need to install Jest, command for it
  npm i jest or npm i --global jest-cli
  )

3. install Webpack

### `npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin`

4. install TypeScript loaders and others

#### `npm install --save-dev ts-loader style-loader css-loader babel-loader`

5. Set up TypeScript in file tsconfig.json of the project root, typically
   {
   "compilerOptions": {
   "outDir": "./dist/",
   "sourceMap": true,
   "noImplicitAny": true,
   "module": "es6",
   "target": "es5",
   "jsx": "react",
   "moduleResolution": "node",
   "allowSyntheticDefaultImports": true,
   "esModuleInterop": true
   },
   "include": [
   "./src/**/*"
   ]
   }

6. Configure Webpack in the file webpack.config.js of the project root, typically
   const path = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   module.exports = {
   entry: './src/index.tsx',
   output: {
   path: path.join(\_\_dirname, '/dist'),
   filename: 'bundle.min.js'
   },
   resolve: {
   extensions: ['.ts', '.tsx', '.js']
   },
   module: {
   rules: [
   {
   test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
   use: ['style-loader', 'css-loader']
   }
   ]
   },
   plugins: [
   new HtmlWebpackPlugin({
   template: './src/index.html'
   })
   ],
   devServer: {
   port: 3000,
   open: true,
   historyApiFallback: true
   }
   };

7. Setup your project structure, typically
   /your-project
   --->/src
   ----index.tsx
   ----App.tsx
   ----index.html
   ----package.json
   ----tsconfig.json
   ----webpack.config.js

8. Add scripts to the package.json file
   "scripts": {
   "start": "webpack serve --mode development --open",
   "build": "webpack --mode production"
   }

9. Create entry file for src/index.tsx, typically
   import \* as React from 'react';
   import \* as ReactDOM from 'react-dom';
   import App from './App';

   ReactDOM.render( App /, document.getElementById('root'));

10. Create entry file for src/App.tsx
    import \* as React from 'react';
    const App: React.FC = () => {
    return div Hello World /div;
    };
    export default App;

11. Create src/index.html file, typically
    !DOCTYPE html
    html lang="en"
    head
    meta charset="UTF-8"
    meta name="viewport" content="width=device-width, initial-scale=1.0"
    title React App /title
    /head
    body
    div id="root"> /div
    /body
    /html

12. Run the project

### `npm start`
