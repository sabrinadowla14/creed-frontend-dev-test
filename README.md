# CreedFrontendDevTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## install angular cli

- npm i -g @angular/cli
- ng new creed-frontend-dev-test
- ng serve
- default route: localhost:4200

Backend:

- json-server
- it will listen to port 3000
  install
- npm i --save json-server
- https://github.com/typicode/json-server
  take the dummy data:
  Create a db.json file with some data

{
"podcasts": [
{ "id": 1, "title": "json-server", "author": "typicode" }
],
"comments": [
{ "id": 1, "body": "some comment", "postId": 1 }
],
"profile": { "name": "typicode" }
}

- In the terminal cd to data folder and create a db.json file
- json-server --watch db.json --port 3005

## Install Bootstrap 4

- npm i --save bootstrap jquery popper
  bootstrap has dependency on jquery and popper

## In Angular and json file you need to update the path of bootstrap and jquery

Go to angular.json file under the build
add
"styles": [
"src/styles.scss",
"node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
"node_modules/jquery/dist/jquery.min.js",
"node_modules/bootstrap/dist/js/bootstrap.min.js"
]
Restart the computer.

##-generate the module with lazy loading - when ever we will need it we are going to call
ng g m podcasts --route podcasts --module app.module

- create a module called podcasts and create a route called podcasts and add it in the app.route.ts file
  cd to podcasts folder
- generate a component called view-all-podcasts
- ng g c view-podcasts
- ng g c view-all-podcasts

How to Run:

In the backend:

- cd data folder
- install npm i --save json-server
  json-server --watch db.json --port 3005
  or
  npx json-server --watch db.json

  In the frontend:

- npm i -g @angular/cli
- ng serve
