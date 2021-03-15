# typescript-webpack-starter

JavaScript starter with TypeScript and webpack.

* Includes a development environment with:
  * webpack configuration for dev and production
  * Prettier config
  * Github Action workflow to test build
  * Jest testing

## Customizing

* Update webpack.config.js 'title' property.

## Run Local Dev Server

    nvm use      # select Node.js v14 if using nvm
    npm install  # install dependencies

    npm start
    # visit http://localhost:8080

## Run tests

    npm test    # test with --watch
    npm run test-ci

## Package project up in dist folder for release to server

    npm run build
