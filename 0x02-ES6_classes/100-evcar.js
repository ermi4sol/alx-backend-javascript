// Import the Car class from 10-car.js
import Car from './10-car.js';

// Define the EVCar class that extends from Car
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);  // Call the parent class (Car) constructor
    this._range = range;         // Store the new range attribute
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override cloneCar to return an instance of Car instead of EVCar
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
