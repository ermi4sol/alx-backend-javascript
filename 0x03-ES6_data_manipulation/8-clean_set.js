export default function cleanSet(set, startString) {
    // Check if startString is empty
    if (startString === '') return '';
  
    // Use the filter method to get values that start with startString
    const result = [...set].filter(value => value.startsWith(startString))
                          .map(value => value.slice(startString.length)); // Remove startString
  
    // Join the results with '-'
    return result.join('-');
  }
  