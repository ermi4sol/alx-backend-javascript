export default function taskBlock(trueOrFalse) {
    const task = false;  // Use const because task is not going to be reassigned outside the block
    const task2 = true;  // Use const for the same reason

    if (trueOrFalse) {
      // Modify the values of task and task2 based on the condition
      return [true, false]; // Directly return new values when trueOrFalse is true
    }

    return [task, task2]; // Return original values when trueOrFalse is false
}

