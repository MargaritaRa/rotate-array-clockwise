function rotateArray(arr, k) {
  // initialize rotations to store the remainder of k / array length
 const rotation = k % arr.length;
//  remove rotations number elements from end of array
 const removed = arr.splice(arr.length - rotation, rotation);
// return removed elements + remaining elements
 return removed.concat(arr);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution

// function rotateArray(arr, k){
//   const rotations = k % arr.length;
//   const removedd = arr.splice(arr.length - rotations, rotations)
//   return removedd.concat(arr)
// }
