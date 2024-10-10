// Exporting a const instance of WeakMap
export const weakMap = new WeakMap();

/**
 * Function to track the number of times an API is called for a given endpoint
 * @param {Object} endpoint - The API endpoint information
 */
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, set the count to 0
    weakMap.set(endpoint, 0);
  }

  // Increment the count for this endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count is >= 5 and throw an error if true
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Return the current count (optional, for logging purposes)
  return count;
}
