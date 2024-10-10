export default class HolbertonClass {
    constructor(size, location) {
      // Initialize attributes with validation
      if (typeof size !== 'number') {
        throw new TypeError('Size must be a number');
      }
      if (typeof location !== 'string') {
        throw new TypeError('Location must be a string');
      }
  
      // Assign the attributes
      this._size = size;
      this._location = location;
    }
  
    // Override the default valueOf method to return the size when cast to a number
    valueOf() {
      return this._size;
    }
  
    // Override the default toString method to return the location when cast to a string
    toString() {
      return this._location;
    }
  }
