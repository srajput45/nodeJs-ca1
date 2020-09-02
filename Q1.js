wordLengths = (arr) => {
    newArr = [];
    arr.map(value=>newArr.push(value.length));
    return newArr;
    }
  
console.log(wordLengths(["hello","world"]))



keysAndValues = (obj) => {
  newArr = [];
  keyArr = Object.keys(obj);
  valuesArr = Object.values(obj);
  newArr.push(keyArr.sort());
  newArr.push(valuesArr);
  return newArr;
};

console.log(keysAndValues({ a: 1, c: 2, b: 3 }));
