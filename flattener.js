function flatten(arr) {
  let inputArray = arr.toString();
  inputArray = inputArray.split(',');

  let flatArray = [];

  inputArray.forEach(function(value) {
    flatArray.push(value);
  });

  return flatArray;
}


module.exports = flatten;
