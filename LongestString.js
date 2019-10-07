function allLongestStrings(inputArray) {
  'use strict';
  let maxSize = Math.max(...inputArray.map(x => {return x.length}));
  console.log(inputArray.map(x => {return x.length}))
  return inputArray.filter(x => x.length === maxSize);
}


