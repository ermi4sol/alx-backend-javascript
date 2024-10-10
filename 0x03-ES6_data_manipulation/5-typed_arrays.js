export default function createInt8TypedArray(length, position, value) {
    // Check if the position is outside the range of the buffer
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
  
    // Create a new ArrayBuffer of the specified length
    const buffer = new ArrayBuffer(length);
    // Create a DataView for the buffer
    const view = new DataView(buffer);
  
    // Set the value at the specified position as an Int8
    view.setInt8(position, value);
  
    // Return the DataView
    return view;
  }
  