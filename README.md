# META-HUMAN DATABASE

![latest_screenshot](https://user-images.githubusercontent.com/24227633/30244513-f945569e-95b6-11e7-844e-63df378c4030.gif)


## OVERVIEW

- an application to help you keep track of who's who in the world of super-powered individuals. Listing their aliases, powers, power levels.

- Written in Angular 4.

- Tested using the Jasmine framework, with Protractor for end-to-end tests and Karma for unit tests.

## TECHNOLOGIES

- Angular 4
- HTML
- CSS(with Sass)
- Typescript

## UPCOMING TECH

- Node.js backend connecting to a Mongo database.

## ISSUES

- Angular 4 not being a mature iteration has hindered me quite a bit. Specific info is hard to find or there is very little of it once I find any. I expected this but was hoping the sparse amount of information wouldn't hold me back as much as it has.

- Took a long time to (begin to) understand how to properly write tests around promises, http requests and asynchrony. In preparing the app to make http requests almost all of my passing tests broke due to the implementation of accessing external data and therefore dealing with asynchronous services.

- Heroku required even more specific configuration than normal. There were a number of small pre-requisites that needed fulfilling before the platform accepted my deployment...even though the app worked perfectly locally.
