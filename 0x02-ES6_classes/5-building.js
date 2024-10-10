export default class Building {
    constructor(sqft) {
      // Validate that sqft is a number
      if (typeof sqft !== 'number') {
        throw new TypeError('Sqft must be a number');
      }
  
      // Initialize the sqft attribute
      this._sqft = sqft;
  
      // Enforce that this class should not be instantiated directly
      if (new.target === Building) {
        throw new TypeError('Cannot instantiate abstract class Building');
      }
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method (must be overridden by subclasses)
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
