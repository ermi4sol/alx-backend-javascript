export default class Airport {
    constructor(name, code) {
      // Initialize attributes with validation
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
  
      // Assign the attributes
      this._name = name;
      this._code = code;
    }
  
    // Override the default toString method to return the airport code
    toString() {
      return `[object ${this._code}]`;
    }
  }
