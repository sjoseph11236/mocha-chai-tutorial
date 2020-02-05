# INTRO TO TESTING: 

## GOALS:  

I am using the Traversy Media youtube course [Intro To JavaScript Unit Testing With Mocha JS & Chai](https://www.youtube.com/watch?v=MLTRHc5dk6s`) to reach these goals: 

  - learn how to set-up testing with Mocha and Chai. 
  - learn some of the common function calls to test simple functions

## SETUP: 
  - Create a folder: `mkdir folder_name`. 
  - `cd folder_name`.
  - `npm init -y`.
  - `npm install mocha chai --save -dev`.
  - `touch .gitignore`.
  - Go into the .gitignore file to add: `node_modules`.
  - Go to the package.json and add: `mocha || true`  to the test key as it value. the pipe with the boolean eliminates unnecessary error messages.
  - Create an `index.js` file. 
  - Mocha will look for a folder called test, so create a folder called test.In this folder should have test files corresponds to the file system of modules to be tested. 

  