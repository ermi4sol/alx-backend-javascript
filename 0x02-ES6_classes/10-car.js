// Define the Car class
export default class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    // Define a method to clone the car
    cloneCar() {
      // Create a new instance of the constructor that is the same as the current instance
      const NewCar = this.constructor[Symbol.species] || this.constructor;
      return new NewCar();
    }
  
    // (Optional) Set Symbol.species if you want custom cloning behavior in future extensions
    static get [Symbol.species]() {
      return this;
    }
  }
  