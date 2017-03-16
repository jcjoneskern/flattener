function flatten(arr) {
  let inputArray = arr.toString();
  inputArray = inputArray.split(',');

  let flatArray = [];

  inputArray.forEach(function(value) {
    if (isNaN(value)) {
      flatArray.push(value);
    } else {
      value = parseInt(value);
      flatArray.push(value);
    }
  });

  return flatArray;
}


module.exports = flatten;
