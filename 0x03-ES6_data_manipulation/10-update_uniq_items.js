export default function updateUniqueItems(groceries) {
    // Check if the argument is a Map
    if (!(groceries instanceof Map)) {
      throw new Error("Cannot process");
    }
  
    // Iterate over the entries of the map
    for (const [item, quantity] of groceries.entries()) {
      // Update the quantity if it is 1
      if (quantity === 1) {
        groceries.set(item, 100);
      }
    }
  
    // Return the updated map
    return groceries;
  }
  