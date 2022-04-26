# Angular Feature App

This repository shows a demo of an Angular Feature App.

_Disclaimer: I am a React developer and have never set up an Angular application
before. This project doesn't claim to be best practice, but should be enough to
serve as a starting point for an Angular Developer to transform their existing
Angular application into a Feature App._

## Getting Started

First of all I recommend to inform yourself about the
[Feature Hub](https://feature-hub.io/). In short:

> The Feature Hub is an opinionated JavaScript implementation of the micro
> frontends approach to creating scalable web applications with multiple teams
> and different technologies.

To run this project, its dependencies must be installed:

```sh
yarn
```

The Angular application must then be built. Its complete source code can be
found in the `src` folder. It will be built in the `dist` folder:

```sh
yarn build
```

Then Webpack can be used to start a DEV server which provides a lightweight DOM
integrator and bundles the Angular application into a standalone Feature App UMD
module which is then loaded asynchronously via the `feature-app-loader` custom
element:

```
yarn start
```

The Feature Hub specific code is completely located in the `feature-hub` folder.

## Links

I developed this demo using the following resources:

- https://feature-hub.io/docs/guides/writing-a-feature-app#implementing-a-feature-app-for-an-integrator-that-uses-web-components
- https://github.com/sinnerschrader/feature-hub/tree/master/packages/demos/src/integrator-dom
- https://medium.com/@balramchavan/integrate-import-angular-v6-component-s-inside-react-js-applications-da5cc03107b4
- https://angular.io/guide/elements
