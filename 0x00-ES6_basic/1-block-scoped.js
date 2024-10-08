export default function taskBlock(trueOrFalse) {
    const task = false;  // Original value of task
    const task2 = true;  // Original value of task2

    if (trueOrFalse) {
      task = true;    // Change newTask based on condition
      task2 = false;  // Change newTask2 based on condition
    }

    return [newTask, newTask2]; // Return the modified or original values
}
