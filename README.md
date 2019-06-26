# Setup 
* Recommended OS OSX
* Install Visual Studio Code (Recommended)
    * Install ESLint plugin 
    * Install GitLens plugin
* Install Git
* Check out from Bitbucket using Git 
    * URL for check out can be fond in Bitbucket under `Clone` 
* Run `npm install` to install dependencies
* Run `npm start` or run config `start` in Visual Studio Code

# Commands 
* `npm start` Creates a debug build and loads application in Chrome. 
* `npm build` Creates a production build of client application in '/dist'
* `npm run eslint` Uses eslint to check for coding errors and warnings. 
**Testing**
* `npm run test` Runs all tests.
* `npm run test:watch` - Runs and watches test files for changes. Follow the propmt for further actions.
* `npm run test:coverage` - Generates test coverage for the whole project repo.

# Project structure
* **actions** - action creators for redux and redux-saga <br>
* **components** - stateless/presentable components <br>
* **containers** - stateful/connected components <br>
* **reducers** - UI persisted state <br>
* **sagas** - asynchronicity for making API calls <br>
* **utils** - helpers functions <br>

# Data-flow
Dispatch an action. <br>
Redux will listen to these actions. <br>
If there is a case written in reducers it will go there and return the new state. <br>
If any saga is listening to this action it will perform API call and again dispatch action based on success or error response. <br>
On state is updated, it will flow back to the connected react components. <br>
If there is any error, a modal will show up with the details. 

# Notes
Both saga and reducers can listen to same type of action.
All new components must be inside AppContainer to use header, footer and the error container.
DO-NOT-MUTATE-THE-STATE keep it immutable.

# Best Practices
* Before pushing to Bitbucket run `npm lint` to check there are no code errors and warnings. 
* Do not commit to master
* Save all dependencies to packages.json when doing an NPM install
* Before doing an NPM install check if dependency is a dev dependency, if so install it as a dev dependency. 

