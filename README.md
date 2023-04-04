# milky-api
POC using JavaScript, Express, Swagger, Nodejs e MongoDB

## Build project
yarn install

## Pre Config
adjust .env".example" to properly config to your environment
- port
- mongoUrl
- debug

## Run with Nodemon
yarn dev

## Import Insomnia documents to call endpoints
All endpoints were configured using Insomnia app, the Import file is in folder: docs/Insomnia_Export_2023-04-04.json

## Missing features
- add swagger to project (verbose to write and keep, the best way to do it, is using decorators...but no time available)
- configure docker for this application
- configure mongodb/dump as docker img
- improve readme justifying each library decision
- add better log library instead of `console.log`
- add commitLint to follow a commit pattern
- add ESlint to review code quality (writing)
- add some packaging library to build project by environment / deploy