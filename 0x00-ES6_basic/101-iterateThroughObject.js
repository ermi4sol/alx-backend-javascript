export default function iterateThroughObject(reportWithIterator) {
    // Convert iterator to an array and join the elements with ' | '
    return [...reportWithIterator].join(' | ');
  }
  