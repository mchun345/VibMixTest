# Macaron
Vibrotactile Icon Editor

## Build Environment

Macaron requires the following libraries:

 - [React][react]
 - [NodeJS tools][nodejs]
 - [NodeJS Package Manager (NPM)][npm]
 - [Webpack][webpack]
 - [d3][d3]
 - [reflux][reflux]

Begin by installing [NPM][npm] for your OS. Once NPM is installed, install react as follows:

 `npm install react --save`

and install webpack:

 - `npm install -g webpack`
 - `npm i webpack --save-dev`
 - `npm i webpack-dev-server --save`

and the JSX syntax handler:

- `npm install babel-loader --save-dev`

You will also need to install the following libraries:

- [d3][d3]: `npm install d3 --save`
- [reflux][reflux]: `npm install reflux --save`

Now, you can build the environment with `npm run build`, and serve it on `localhost:8080` with `npm run dev`. When served, it will automatically refresh when you change components. 
For more information, follow this tutorial: https://github.com/christianalfoni/react-webpack-cookbook/wiki


[nodejs]: http://nodejs.org
[npm]: https://www.npmjs.org
[react]: http://facebook.github.io/react/
[webpack]: http://webpack.github.io
[d3]: http://d3js.org
[reflux]: https://github.com/spoike/refluxjs

