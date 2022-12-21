function sortArray(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}
function findSum(result) {
  let array = [1, 2, 4, 5, 6, 7, 8, 9, 0, 3, -3, -5, -6, -7, -8];
  let arr = [];
  array.sort(sortArray);
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == result) {
        arr.push([i, j]);
      }
    }
  }
  console.log(array);
  return arr;
}

console.log(findSum(5));
