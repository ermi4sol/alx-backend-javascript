export default function createIteratorObject(report) {
    // Create an array that will store all employees from all departments
    const allEmployees = [];
  
    // Loop through each department in report.allEmployees
    for (const department of Object.values(report.allEmployees)) {
      // Add all employees from the department to the allEmployees array
      allEmployees.push(...department);
    }
  
    // Return an iterator using Symbol.iterator
    return allEmployees[Symbol.iterator]();
  }
  