# AngularJS in webpack

Got a legacy project you'd like to incrementally update to newer standards? One place to start is with better tooling. This is a demo project to showcase compiling an AngularJS 1.6.9 application with [webpack](https://webpack.js.org/).

## Getting started

Prerequisites: Node 8.x, NPM 5.x

```sh
# Install dependencies
npm install

# Run the start script
npm start
```

You can access the client in your favorite browser at [localhost:9000](http://localhost:9000/).

## Caveats

1. No automatic dependency annotations: forces array syntax for Angular components.
1. No automatic view handling: `index.html` is an implicit dependency of `index.js`.

## Improvements (To-Do)

1. Add support for JSX.
1. Add a webpack loader to implement Angular's `templateCache`.
