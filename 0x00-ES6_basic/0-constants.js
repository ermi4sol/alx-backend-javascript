// Use const in taskFirst
/** export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}

// getLast function remains the same
export function getLast() {
    return ' is okay';
}

// Use let in taskNext
export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}
**/

// Use const only once in taskFirst
export function taskFirst() {
    return 'I prefer const when I can.';
  }
  
  // getLast function remains the same
  export function getLast() {
    return ' is okay';
  }
  
  // Use let only once in taskNext
  export function taskNext() {
    let combination = 'But sometimes let' + getLast(); // Combine the assignment and the addition
    return combination;
  }
  