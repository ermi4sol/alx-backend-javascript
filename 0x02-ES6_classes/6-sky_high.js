import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor to initialize sqft
    super(sqft);

    // Validate that floors is a number
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    // Initialize the floors attribute
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
