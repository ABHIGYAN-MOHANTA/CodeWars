function moveZeros(arr) {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // Swap non-zero element with the element at the nonZeroIndex.
      [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
      nonZeroIndex++;
    }
  }

  return arr;
}

// Test the function with the provided array
const result = moveZeros([1, 12, 3, 0, 0, 0, 0, 142, 324]);
console.log(result);
