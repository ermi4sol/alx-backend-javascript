export default function taskBlock(trueOrFalse) {
    const task = false;  // Use const because task is not going to be reassigned outside the block
    const task2 = true;  // Use const for the same reason

    if (trueOrFalse) {
      let task = true;   // Use let to scope task inside the if block
      let task2 = false; // Use let to scope task2 inside the if block
    }

    return [task, task2];
}
