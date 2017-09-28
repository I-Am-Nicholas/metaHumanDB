<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!--**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*-->
# META-HUMAN DATABASE

## TABLE OF CONTENTS

- [DEMO](#demo)
- [OVERVIEW](#overview)
- [LINK TO DEPLOYED APPLICATION](#link-to-deployed-application)
- [TECHNOLOGIES](#technologies)
- [INSTALLATION INSTRUCTIONS](#installation-instructions)
  - [Dependency installation timeline:](#dependency-installation-timeline)
  - [Dependency Installation/Set Up](#dependency-installationset-up)
  - [Running the application:](#running-the-application)
  - [Running the unit tests:](#running-the-unit-tests)
  - [Installing the End-to-End Test tool, Protractor](#installing-the-end-to-end-test-tool-protractor)
  - [Running the End-to-End tests:](#running-the-end-to-end-tests)
- [ISSUES](#issues)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

&nbsp;
## DEMO

![untitled 1](https://user-images.githubusercontent.com/24227633/30761182-3ef1c128-9fd5-11e7-90e2-fcf59f3c192b.gif)


&nbsp;
## OVERVIEW

- an application to help you keep track of who's who in the world of super-powered individuals. Listing their aliases, powers, power levels.

- Written in Angular 4.

- Tested using the Jasmine framework, with Protractor for end-to-end tests and Karma for unit tests.

&nbsp;
## LINK TO DEPLOYED APPLICATION

  https://metahuman-db.herokuapp.com

&nbsp;
## TECHNOLOGIES

- Angular 4
- HTML
- CSS(with Sass)
- Typescript
- Protractor
- Karma

&nbsp;
## INSTALLATION INSTRUCTIONS

### Dependency installation timeline:

  Xcode —> Homebrew —> Node.js(with NPM (Node Package Manager)) —> Angular CLI


### Dependency Installation/Set Up

1. Download Xcode via the Mac App Store.

    https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12

2. Type the following code in your Command Line and follow the instructions to install Homebrew.

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”

3. Type:

  - brew install node

4. NPM is installed with Node. To test that Node is installed correctly type:

  - node -v

  You should see something resembling: v8.4.0

5. To test that NPM is installed correctly type:

  - npm -v

  You should see something resembling: 5.4.0

6. To install the Angular CLI tool, type:

  - npm install -g @angular/cli

7. Clone the repo:

  - git clone https://github.com/marudine/superheroes.git

### Running the application:

  Start a server on your machine by typing:

  - ng serve --open

  A local version of Meta-Human Database will open in your browser at http://localhost:4200/.

  For the live/deployed version of the application:

  - https://metahuman-db.herokuapp.com/


### Running the unit tests:

![karma_unit_tests](https://user-images.githubusercontent.com/24227633/30978401-59955822-a472-11e7-834d-ab388435cf2e.gif)

  In a dedicated window of your command line tool (but from the same location as where you typed ng serve --open ), type:

  - ng test

  These tests will also run in a specifically allocated browser window.


### Installing the End-to-End Test tool, Protractor

  Again, in a dedicated window of your command line tool (but from the same location as where you typed ng serve --open ), type:

  - npm install -g protractor

  This will install two more command line tools, Protractor itself and Selenium’s webdriver-manager.

  webdriver-manager is necessary to start up the server that Protractor uses to run its tests.

### Running the End-to-End tests:


![protractor_end-to-end_tests](https://user-images.githubusercontent.com/24227633/30978571-db678ac8-a472-11e7-952f-5a106bb6e7ca.gif)


  **NB The Protractor tests require that the app server (via 'ng serve') is already running.**
  

  Open another dedicated window in the same location as the previous commands, (I usually find it useful to have a split screen set up so I can see the web driver-manager and protractor outputs side-by-side).
  Type:

  - webdriver-manager start

  Let that action complete (it should inform you on the last emitted line of the stack trace that the “Selenium Server is up and running”)

  Then:

  - protractor conf.js

  These tests will also run in a dedicated window of your browser. Switch back to the command line window to see the rows of green passed test dots!

&nbsp;
## ISSUES

  - Angular 4 not being a mature iteration has hindered me quite a bit. Specific info is hard to find or there is very little of it once I find any. I expected this but was hoping the sparse amount of information wouldn't hold me back as much as it has.

  - Took a long time to (begin to) understand how to properly write tests around promises, http requests and asynchrony. In preparing the app to make http requests almost all of my passing tests broke due to the implementation of accessing external data and therefore dealing with asynchronous services.

  - Heroku required even more specific configuration than normal. There were a number of small pre-requisites that needed fulfilling before the platform accepted my deployment...even though the app worked perfectly locally.
