// 9-try.js
export default function guardrail(mathFunction) {
    const queue = []; // Create the queue array
  
    try {
      const result = mathFunction(); // Attempt to execute the passed function
      queue.push(result); // Append the result to the queue if successful
    } catch (error) {
      queue.push(error.message); // Append the error message to the queue if an error occurs
    }
  
    queue.push('Guardrail was processed'); // Append the guardrail message to the queue
    return queue; // Return the queue
  }
  