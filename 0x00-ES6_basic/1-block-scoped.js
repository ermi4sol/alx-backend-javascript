export default function taskBlock(trueOrFalse) {
    const task = false;  // Original value of task
    const task2 = true;  // Original value of task2
  
    // Use let to define new variables that are scoped to the if block
    let newTask = task; // Start with original value
    let newTask2 = task2; // Start with original value
  
    if (trueOrFalse) {
      newTask = true;    // Change newTask based on condition
      newTask2 = false;  // Change newTask2 based on condition
    }
  
    return [newTask, newTask2]; // Return the modified or original values
  }
  