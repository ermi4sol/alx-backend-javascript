# Class and Metaprogramming in JavaScript
## Project Overview
This project explores the fundamentals of Classes and Metaprogramming in JavaScript. It covers how to define and extend classes, add methods (including static methods), and leverage metaprogramming features such as Symbols. The project also includes configuration for Jest, Babel, and ESLint to ensure code quality and proper testing.

## Learning Objectives
By the end of this project, you will be able to:

* Define and create JavaScript classes.
* Add methods to classes.
* Use static methods in classes.
* Extend a class from another.
* Understand and apply metaprogramming concepts such as Symbols.

## Setup Instructions
## Prerequisites
Node.js version 12.11.x
npm version 6.11.3

## Installing Node.js

Run the following commands to install Node.js and npm:

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

Verify the installation:

nodejs -v  # should output v12.11.1
npm -v     # should output 6.11.3

# Project Setup
1. Clone the repository and navigate to the project directory.
2. Install the necessary packages by running:

npm install

3. Ensure that all the necessary configuration files (package.json, babel.config.js, .eslintrc.js) are in place as provided.

## Usage
### Running the Linter
To check for linting errors, run:

npm run lint

To check lint across all JS files in the project:

npm run check-lint

### Running Tests
To run the tests, use:

npm run test

To run both linting and tests together:

npm run full-test

### Running the Development Server
To run the code with Babel (for ES6+ syntax support), run:

npm run dev

## Project Structure
* Classes: Basic class definitions and how to add instance and static methods.
* Class Extensions: Extending a class from another to inherit properties and methods.
* Metaprogramming: Usage of Symbols and other advanced metaprogramming techniques.

## Key Concepts
* Classes: Learn how to define and instantiate classes in JavaScript.
* Methods: Understand how to add instance and static methods to a class.
* Inheritance: Explore how to extend one class from another.
* Metaprogramming: Learn about Symbols and other advanced concepts to modify class behavior dynamically.

## Example Code

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak();  // Output: Rex barks

## Tools and Libraries
* Node.js: JavaScript runtime.
* Jest: Testing framework.
* Babel: JavaScript compiler to support ES6+ features.
* ESLint: Linter to ensure code quality.


