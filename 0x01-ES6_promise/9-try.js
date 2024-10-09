// 9-try.js
export default function guardrail(mathFunction) {
    // Create the queue array
    const queue = [];
  
    try {
      // Execute the mathFunction and append the result to the queue
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      // If an error occurs, append the error message to the queue
      queue.push(`Error: ${error.message}`);
    } finally {
      // Always add this message to the queue
      queue.push('Guardrail was processed');
    }
  
    // Return the queue
    return queue;
  }
  