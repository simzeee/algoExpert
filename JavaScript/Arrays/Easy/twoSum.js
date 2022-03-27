function twoNumberSum(array, targetSum) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    let compare1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (compare1 + array[j] === targetSum) {
        return [compare1, array[j]];
      }
    }
  }
  return [];
}

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const hash = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let result = targetSum - num;
    if (result in hash) {
      return [result, num];
    } else {
      hash[num] = true;
    }
  }
  return [];
}

function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  console.log(array);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];

    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
