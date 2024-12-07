# API Testing for Tasks 0-10

This project demonstrates a series of API tests for various tasks, ranging from basic setup to more advanced testing and integration, using Mocha, Chai, and Supertest. It also includes the development of an API using Express.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Task Breakdown](#task-breakdown)
3. [Running the API](#running-the-api)
4. [Running Tests](#running-tests)
5. [Dependencies](#dependencies)
6. [License](#license)

## Project Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js**: v14 or higher
- **npm**: Node's package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ermi4sol/alx-files_manager.git
   cd api-testing
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Task Breakdown

### Task 0: Basic Setup

- Set up an Express app.
- Implement a simple route `/api` that returns a status message.

### Task 1: Create a Basic Test

- Write a test to ensure that the `/api` route returns a status code 200.

### Task 2: Parameterized Tests

- Create tests for routes with parameters (e.g., `/api/:id`).
- Test different scenarios using various ID values.

### Task 3: Testing API Responses

- Test the response body for correctness.
- Use assertions to validate JSON structure and values returned by the API.

### Task 4: Create a POST Route

- Implement a route `/api/data` that accepts a POST request with JSON data.
- Test the POST route to ensure it handles request body data properly.

### Task 5: Validate HTTP Status Codes

- Write tests to ensure that proper HTTP status codes are returned (e.g., `200 OK`, `404 Not Found`, `500 Internal Server Error`).

### Task 6: Test Authentication

- Implement a basic authentication mechanism (using JWT or a simple token).
- Write tests to verify authentication and authorization (e.g., unauthorized access).

### Task 7: Error Handling

- Implement error handling in your API.
- Write tests that trigger error responses (e.g., 400 Bad Request) and validate the error messages.

### Task 8: API Integration Test

- Write an integration test that makes multiple requests to different endpoints.
- Test the overall flow of your API using different inputs.

### Task 9: Asynchronous Testing

- Implement asynchronous route handlers (e.g., using `async`/`await`).
- Write tests to ensure that asynchronous operations are properly handled.

### Task 10: Complex API Testing

- Implement more complex API functionality, such as file uploads, pagination, or nested routes.
- Write tests that validate these complex features.

## Running the API

Once the setup is complete, you can start the server:

```bash
npm start
```

This will start the API on the default port `3000` (or the one you specify in your code). The API will be accessible at [http://localhost:3000](http://localhost:3000).

## Running Tests

To run the tests for all tasks, use the following command:

```bash
npm test
```

This will run the Mocha test suite with Chai assertions. It will automatically discover all `*.test.js` files and execute the tests.

## Dependencies

This project uses the following libraries:

- **Express**: Web framework for building the API.
- **Mocha**: JavaScript test framework for running tests.
- **Chai**: Assertion library for writing tests.
- **Supertest**: HTTP assertions library for testing the API endpoints.

You can install these dependencies by running:

```bash
npm install
```