export default function groceriesList() {
    // Create a new Map to hold grocery items
    const groceries = new Map();
  
    // Add grocery items to the Map
    groceries.set('Apples', 10);
    groceries.set('Tomatoes', 10);
    groceries.set('Pasta', 1);
    groceries.set('Rice', 1);
    groceries.set('Banana', 5);
  
    // Return the Map
    return groceries;
  }
  