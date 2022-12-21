function binorySearch(array, item = result - array[i]) {
  let start = 0;
  let end = array.length;
  let midle;
  let found = false;
  let position = 0;
  while (found === false && start <= end) {
    midle = Math.floor((start + end) / 2);
    if (array[midle] === item) {
      found = true;
      position = midle;
      return position;
    }
    if (item < array[midle]) {
      end = midle - 1;
    } else {
      start = midle + 1;
    }
  }
  return position;
}
function sortArray(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}
function findSum(result) {
  let array = [1, 2, 4, 5, 6, 7, 8, 9, 0, 3, -3, -5, -6, -7, -8,];
  let arr = [];
  array.sort(sortArray);
   for (let i = 0; i < array.length; i++) {
      if (binorySearch(array, (item = result - array[i])) == 0) {
        continue
      }
      if (binorySearch(array, (item = result - array[i])) > 0) {
         arr.push([i,binorySearch(array, (item = result - array[i]))])
      }
   }
   if (arr.length <= 1) {
      return "No sum";
   }
  return arr;
}

console.log(findSum(3));
