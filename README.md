# AngularJS and Karma Coding Dojo



## Overview

Will be explained in the coding dojo

## Prerequisites

### Git
- A good place to learn about setting up git is [here][git-github]
- Git [home][git-home] (download, documentation)

### Node.js
- Generic [installation instructions][node-generic].
- Mac DMG [here][node-mac]
- Windows download from [here][node-windows]. (You will also need [7 Zip] to unzip the node archive)
  (and don't forget to add `node.exe` to  your executable path)

## Commits / Tutorial Outline

You can check out any point of the tutorial using
    git checkout step-?

To see the changes which between any two lessons use the git diff command.
    git diff step-?..step-?

### Vorbereitung
1. Node-Js installieren
2. git clone https://github.com/FlorianGrundig/angular-coding-dojo
3. cd angular-coding-dojo
4. npm install -g karma
5. npm install -g karma-ng-scenario

#### Step-0
0. git checkout -f Step-0
1. start app
2. explore index.html => Versuch den Aufbau einer angular app zu erklaeren
3. fix unit tests
4. broke unit tests with realtime feedback
5. fix e2e tests

##### Lesson's learned
1. Aufbau angular app
2. Prinzip DI => Vorteile fuer JS-Entwicklung
3. TDD => Vorteile fuer JS-Entwicklung

#### Step-1
0. git checkout -f Step-1
1. start app
1.1 start unit tests
1.2 fix unit tests (look at karma.conf => include module js => why is it not running?)
2. explore index.html => warum phones.data?
3. fix e2e tests (http://localhost:8000/test/e2e/runner.html)
4. try e2e with more browsers

#### Step-2
0. git checkout -f Step-2
1. start app
2. explore index.html
3. explore module-angular-coding-dojo.js (no controller in markup)
4. look at phone-list.html (ng-src)
5. look at PhoneDetailCtrl (how is the id parameter passed?)
6. look at phone-detail.html (what happens, when user clicks on thumb img, filter “checkmark”, look at a phones/*.json)
7. look at the unit tests how to use angular mocks
8. look at the e2e tests (binding)



## Development with angular-seed

The following docs apply to all angular-seed projects and since this tutorial is a project
based on angular-seed, the instructions apply to it as well.

### Running the app during development

1. run `./scripts/web-server.js`
2. navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your
   browser.

### Running unit tests

Requires [node.js](http://nodejs.org/), Karma (`npm install karma --save-dev`) and a local
or remote browser.

* start `scripts/test.sh` (on windows: `scripts\test.bat`)
  * a browser will start and connect to the Karma server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/karma.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files


### End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows
you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

* Install the Karma ng-scenario adapter with `npm install karma-ng-scenario`
* create your end-to-end tests in `test/e2e/scenarios.js`

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    config/karma.conf.js        --> config file for running unit tests with Karma
    config/karma-e2e.conf.js    --> config file for running e2e tests with Karma

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Karma (*nix)
      e2e-test.bat      --> runs end-to-end tests with Karma (windows)
      test.bat          --> autotests unit tests with Karma (windows)
      test.sh           --> autotests unit tests with Karma (*nix)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
