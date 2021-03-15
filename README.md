# typescript-webpack-starter

JavaScript starter with TypeScript and webpack.

Includes a development environment with:
  * webpack configuration for dev and production
  * Prettier config
  * Github Action workflow to test build
  * Jest testing

## Customizing

* Update `webpack.common.js` 'title' property
* Update `package.json` 'name' value
* Update `README.md` for your application
* Add your application code to `src/index.ts`, create modules such as `src/hello.ts` and add tests such as `src/tests/hello.test.ts`.

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
