# 0x01. ES6 Promises

Learning Objectives
By the end of this project, you should be able to:

Understand Promises: Explain what promises are, how they work, and why they are used.
Use Promise Methods: Implement then, resolve, catch, and every method of the Promise object.
Error Handling: Use throw and try/catch for error handling in asynchronous code.
Async/Await: Understand and use the await operator and async functions effectively.
Setup Instructions
Follow these steps to set up your development environment:

Install Node.js 12.11.x

bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify installation:

bash
Copy code
nodejs -v
npm -v
Install Jest, Babel, and ESLint Create a new project directory and create a package.json file using the configuration you provided. Then, run:

bash
Copy code
npm install
Create Necessary Files

Create a .eslintrc.js file for ESLint configuration.
Create a babel.config.js file for Babel configuration.
Create a utils.js file containing the provided uploadPhoto and createUser functions.
Add a README.md file at the root of your project directory.
Project Files
Make sure your project directory contains the following files with their respective contents:

package.json

json
Copy code
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
babel.config.js

javascript
Copy code
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
utils.js

javascript
Copy code
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
.eslintrc.js

javascript
Copy code
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
Testing and Linting
To run tests: Use the command npm run test.
To lint your code: Use the command npm run lint or npm run full-test for both linting and testing.
Additional Tips
Make sure each JavaScript file ends with a new line, as per the requirements.
Ensure all functions are properly exported in your JavaScript files.
Use the provided uploadPhoto and createUser functions in your implementation of promises, async/await, and error handling.
Example Functions
Here’s a simple example of how you might implement a function using promises and async/await:
