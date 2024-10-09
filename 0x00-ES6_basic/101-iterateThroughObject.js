export default function iterateThroughObject(reportWithIterator) {
    // Convert the iterator to an array using the spread operator
    const employees = [...reportWithIterator];
    
    // Join the employee names with ' | ' separator
    return employees.join(' | ');
  }
  